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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../_common/decorators/get-user.decorator");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const local_guard_1 = require("./guards/local.guard");
const create_user_dto_1 = require("../user/dto/create-user.dto");
const user_entity_1 = require("../user/entities/user.entity");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(createUserDto) {
        return this.authService.register(createUserDto);
    }
    login(_, user) {
        return this.authService.login(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("./dto/user-registered.dto").UserWithAccessToken }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: require("./dto/user-registered.dto").UserWithAccessToken }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map