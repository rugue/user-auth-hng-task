import { JwtService } from '@nestjs/jwt';
import { UserWithAccessToken } from 'src/auth/dto/user-registered.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<UserWithAccessToken>;
    login(user: User): Promise<UserWithAccessToken>;
    generateToken(user: User, message: string): Promise<UserWithAccessToken>;
}
