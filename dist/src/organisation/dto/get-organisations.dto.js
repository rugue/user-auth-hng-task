"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrganisationsDto = void 0;
const openapi = require("@nestjs/swagger");
class GetOrganisationsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { organisations: { required: true, type: () => [require("./organisation-without-users.dto").OrganisationWithoutUsersDto] } };
    }
}
exports.GetOrganisationsDto = GetOrganisationsDto;
//# sourceMappingURL=get-organisations.dto.js.map