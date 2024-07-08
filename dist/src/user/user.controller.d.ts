import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getById(id: string, user: User): Promise<User>;
}
