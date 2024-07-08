"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationWithoutUsersDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const organisation_entity_1 = require("../entities/organisation.entity");
class OrganisationWithoutUsersDto extends (0, swagger_1.OmitType)(organisation_entity_1.Organisation, [
    'users',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.OrganisationWithoutUsersDto = OrganisationWithoutUsersDto;
//# sourceMappingURL=organisation-without-users.dto.js.map