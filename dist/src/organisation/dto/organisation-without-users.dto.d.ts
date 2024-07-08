import { Organisation } from 'src/organisation/entities/organisation.entity';
declare const OrganisationWithoutUsersDto_base: import("@nestjs/common").Type<Omit<Organisation, "users">>;
export declare class OrganisationWithoutUsersDto extends OrganisationWithoutUsersDto_base {
}
export {};
