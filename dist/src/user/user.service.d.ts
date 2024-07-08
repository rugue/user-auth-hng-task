import { OrganisationService } from 'src/organisation/organisation.service';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly usersRepository;
    private readonly organisationService;
    constructor(usersRepository: Repository<User>, organisationService: OrganisationService);
    create(createUserDto: CreateUserDto): Promise<{
        user: User;
        organisation: import("../organisation/entities/organisation.entity").Organisation;
    }>;
    validateUser(email: string, password: string): Promise<User>;
    getByUserId(userId: string): Promise<User>;
    getMyUser(id: string, user: User): Promise<User>;
}
