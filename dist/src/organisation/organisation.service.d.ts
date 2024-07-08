import { AddUserToOrganisationDto } from 'src/organisation/dto/add-user-to-organisation.dto';
import { CreateOrganisationDto } from 'src/organisation/dto/create-organisation.dto';
import { OrganisationWithoutUsersDto } from 'src/organisation/dto/organisation-without-users.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Organisation } from './entities/organisation.entity';
import { GetOrganisationsDto } from './dto/get-organisations.dto';
export declare class OrganisationService {
    private readonly organisationsRepository;
    private readonly userService;
    constructor(organisationsRepository: Repository<Organisation>, userService: UserService);
    create(createOrganisationDto: Omit<Organisation, 'orgId'>): Promise<Organisation>;
    getUserOrganisations(user: User): Promise<GetOrganisationsDto>;
    getUserOrganisationByOrgId(orgId: string, user: User): Promise<OrganisationWithoutUsersDto>;
    createOrganisation(createOrganisationDto: CreateOrganisationDto, user: User): Promise<OrganisationWithoutUsersDto>;
    addUserToOrganisation(orgId: string, addUserToOrganisationDto: AddUserToOrganisationDto, user: User): Promise<string>;
}
