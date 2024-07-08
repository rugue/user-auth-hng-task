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
exports.OrganisationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const organisation_entity_1 = require("./entities/organisation.entity");
let OrganisationService = class OrganisationService {
    constructor(organisationsRepository, userService) {
        this.organisationsRepository = organisationsRepository;
        this.userService = userService;
    }
    async create(createOrganisationDto) {
        const organisation = this.organisationsRepository.create(createOrganisationDto);
        return this.organisationsRepository.save(organisation);
    }
    async getUserOrganisations(user) {
        return this.organisationsRepository
            .find({
            where: { users: user },
        })
            .then((organisations) => ({ organisations }));
    }
    async getUserOrganisationByOrgId(orgId, user) {
        const organisation = await this.organisationsRepository.findOne({
            where: { orgId, users: user },
        });
        if (!organisation) {
            throw new common_1.NotFoundException(`Organisation with ID: ${orgId} not found`);
        }
        return organisation;
    }
    async createOrganisation(createOrganisationDto, user) {
        try {
            const newOrganisation = await this.create({
                ...createOrganisationDto,
                users: [user],
            });
            delete newOrganisation.users;
            return newOrganisation;
        }
        catch (error) {
            throw new common_1.BadRequestException('Client error');
        }
    }
    async addUserToOrganisation(orgId, addUserToOrganisationDto, user) {
        const organisation = await this.organisationsRepository.findOne({
            where: { orgId, users: user },
            relations: ['users'],
        });
        if (!organisation) {
            throw new common_1.NotFoundException(`Organisation with ID: ${orgId} not found`);
        }
        const userToAdd = await this.userService.getByUserId(addUserToOrganisationDto.userId);
        organisation.users.push(userToAdd);
        await this.organisationsRepository.save(organisation);
        return 'User added to organisation successfully';
    }
};
exports.OrganisationService = OrganisationService;
exports.OrganisationService = OrganisationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(organisation_entity_1.Organisation)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], OrganisationService);
//# sourceMappingURL=organisation.service.js.map