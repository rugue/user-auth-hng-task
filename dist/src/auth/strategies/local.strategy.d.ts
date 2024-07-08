import { Strategy } from 'passport-local';
import { UserService } from 'src/user/user.service';
declare const LocalStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(email: string, password: string): Promise<import("../../user/entities/user.entity").User>;
}
export {};
