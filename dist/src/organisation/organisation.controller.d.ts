import { AddUserToOrganisationDto } from 'src/organisation/dto/add-user-to-organisation.dto';
import { CreateOrganisationDto } from 'src/organisation/dto/create-organisation.dto';
import { OrganisationService } from 'src/organisation/organisation.service';
import { User } from 'src/user/entities/user.entity';
export declare class OrganisationController {
    private readonly organisationService;
    constructor(organisationService: OrganisationService);
    getMyOrganisations(user: User): Promise<import("./dto/get-organisations.dto").GetOrganisationsDto>;
    getSingleOrganisation(orgId: string, user: User): Promise<import("./dto/organisation-without-users.dto").OrganisationWithoutUsersDto>;
    createOrganisation(createOrganisationDto: CreateOrganisationDto, user: User): Promise<import("./dto/organisation-without-users.dto").OrganisationWithoutUsersDto>;
    addUserToOrganisation(orgId: string, addUserToOrganisationDto: AddUserToOrganisationDto, user: User): Promise<string>;
}
