import { User } from '../../user/entities/user.entity';
declare const UserWithoutOrganisation_base: import("@nestjs/common").Type<Omit<User, "password" | "organisations">>;
export declare class UserWithoutOrganisation extends UserWithoutOrganisation_base {
}
export declare class UserWithAccessToken {
    user: UserWithoutOrganisation;
    accessToken: string;
    message: string;
}
export {};
