import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<import("./dto/user-registered.dto").UserWithAccessToken>;
    login(_: LoginDto, user: User): Promise<import("./dto/user-registered.dto").UserWithAccessToken>;
}
