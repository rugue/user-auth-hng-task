"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const organisation_service_1 = require("../organisation/organisation.service");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(usersRepository, organisationService) {
        this.usersRepository = usersRepository;
        this.organisationService = organisationService;
    }
    async create(createUserDto) {
        const { email, password, ...rest } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.usersRepository.create({
            ...rest,
            email,
            password: hashedPassword,
        });
        const newOrganisation = await this.organisationService.create({
            name: `${newUser.firstName}'s Organisation`,
            users: [newUser],
        });
        newUser.organisations = [newOrganisation];
        const user = await this.usersRepository.save(newUser);
        return { user, organisation: newOrganisation };
    }
    async validateUser(email, password) {
        try {
            const user = await this.usersRepository
                .createQueryBuilder('user')
                .where('user.email = :email', { email })
                .addSelect('user.password')
                .getOne();
            if (!user) {
                throw new Error();
            }
            const isValid = bcrypt.compareSync(password, user.password);
            if (!isValid) {
                throw new Error();
            }
            return user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Authentication failed');
        }
    }
    async getByUserId(userId) {
        const user = await this.usersRepository.findOne({ where: { userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID: ${userId} not found`);
        }
        return user;
    }
    async getMyUser(id, user) {
        if (id !== user.userId) {
            throw new common_1.UnauthorizedException('You are not authorized to view this user');
        }
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => organisation_service_1.OrganisationService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        organisation_service_1.OrganisationService])
], UserService);
//# sourceMappingURL=user.service.js.map