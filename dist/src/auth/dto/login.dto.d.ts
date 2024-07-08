import { CreateUserDto } from 'src/user/dto/create-user.dto';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "email" | "password">>;
export declare class LoginDto extends LoginDto_base {
}
export {};
