import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { EnvironmentVariables } from 'src/_common/validations/env.validation';
export declare class TaskService {
    private readonly httpService;
    private readonly ConfigService;
    private readonly logger;
    readonly baseUrl: string;
    constructor(httpService: HttpService, ConfigService: ConfigService<EnvironmentVariables>);
    handleCron(): Promise<void>;
}
