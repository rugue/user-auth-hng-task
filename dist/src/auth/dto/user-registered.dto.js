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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithAccessToken = exports.UserWithoutOrganisation = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
class UserWithoutOrganisation extends (0, swagger_1.OmitType)(user_entity_1.User, [
    'organisations',
    'password',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserWithoutOrganisation = UserWithoutOrganisation;
class UserWithAccessToken {
    static _OPENAPI_METADATA_FACTORY() {
        return { user: { required: true, type: () => require("./user-registered.dto").UserWithoutOrganisation }, accessToken: { required: true, type: () => String } };
    }
}
exports.UserWithAccessToken = UserWithAccessToken;
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", String)
], UserWithAccessToken.prototype, "message", void 0);
//# sourceMappingURL=user-registered.dto.js.map