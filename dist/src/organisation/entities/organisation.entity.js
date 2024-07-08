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
exports.Organisation = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Organisation = class Organisation {
    static _OPENAPI_METADATA_FACTORY() {
        return { orgId: { required: true, type: () => String }, name: { required: true, type: () => String }, users: { required: true, type: () => [require("../../user/entities/user.entity").User] }, description: { required: false, type: () => String } };
    }
};
exports.Organisation = Organisation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Organisation.prototype, "orgId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Organisation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.organisations),
    __metadata("design:type", Array)
], Organisation.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Organisation.prototype, "description", void 0);
exports.Organisation = Organisation = __decorate([
    (0, typeorm_1.Entity)()
], Organisation);
//# sourceMappingURL=organisation.entity.js.map