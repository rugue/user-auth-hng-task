import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { EnvironmentVariables } from 'src/_common/validations/env.validation';
import { AccessTokenPayload } from 'src/auth/interfaces/access-token.interface';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    readonly configService: ConfigService<EnvironmentVariables>;
    private readonly userService;
    constructor(configService: ConfigService<EnvironmentVariables>, userService: UserService);
    validate(payload: AccessTokenPayload): Promise<import("../../user/entities/user.entity").User>;
}
export {};
