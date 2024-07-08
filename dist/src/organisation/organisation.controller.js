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
exports.OrganisationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../_common/decorators/get-user.decorator");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const add_user_to_organisation_dto_1 = require("./dto/add-user-to-organisation.dto");
const create_organisation_dto_1 = require("./dto/create-organisation.dto");
const organisation_service_1 = require("./organisation.service");
const user_entity_1 = require("../user/entities/user.entity");
let OrganisationController = class OrganisationController {
    constructor(organisationService) {
        this.organisationService = organisationService;
    }
    getMyOrganisations(user) {
        return this.organisationService.getUserOrganisations(user);
    }
    getSingleOrganisation(orgId, user) {
        return this.organisationService.getUserOrganisationByOrgId(orgId, user);
    }
    createOrganisation(createOrganisationDto, user) {
        return this.organisationService.createOrganisation(createOrganisationDto, user);
    }
    addUserToOrganisation(orgId, addUserToOrganisationDto, user) {
        return this.organisationService.addUserToOrganisation(orgId, addUserToOrganisationDto, user);
    }
};
exports.OrganisationController = OrganisationController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-organisations.dto").GetOrganisationsDto }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OrganisationController.prototype, "getMyOrganisations", null);
__decorate([
    (0, common_1.Get)(':orgId'),
    openapi.ApiResponse({ status: 200, type: require("./dto/organisation-without-users.dto").OrganisationWithoutUsersDto }),
    __param(0, (0, common_1.Param)('orgId')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OrganisationController.prototype, "getSingleOrganisation", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/organisation-without-users.dto").OrganisationWithoutUsersDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organisation_dto_1.CreateOrganisationDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OrganisationController.prototype, "createOrganisation", null);
__decorate([
    (0, common_1.Post)(':orgId/users'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Param)('orgId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_user_to_organisation_dto_1.AddUserToOrganisationDto,
        user_entity_1.User]),
    __metadata("design:returntype", void 0)
], OrganisationController.prototype, "addUserToOrganisation", null);
exports.OrganisationController = OrganisationController = __decorate([
    (0, common_1.Controller)('api/organisations'),
    (0, swagger_1.ApiTags)('Organisation'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [organisation_service_1.OrganisationService])
], OrganisationController);
//# sourceMappingURL=organisation.controller.js.map