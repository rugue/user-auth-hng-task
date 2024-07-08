"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const all_exception_filter_1 = require("./_common/filters/all-exception.filter");
const response_interceptor_1 = require("./_common/interceptors/response.interceptor");
const user_module_1 = require("./user/user.module");
const env_validation_1 = require("./_common/validations/env.validation");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const organisation_module_1 = require("./organisation/organisation.module");
const app_controller_1 = require("./app.controller");
const schedule_1 = require("@nestjs/schedule");
const task_module_1 = require("./task/task.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                validate: env_validation_1.validate,
            }),
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
                    const url = configService.get('DATABASE_URL', { infer: true });
                    const isProduction = configService.get('NODE_ENV') === env_validation_1.Environment.Production;
                    const isStaging = configService.get('NODE_ENV') === env_validation_1.Environment.Staging;
                    return {
                        type: 'postgres',
                        url,
                        autoLoadEntities: true,
                        synchronize: !isProduction,
                        ...(isStaging && {
                            ssl: {
                                rejectUnauthorized: !isProduction,
                            },
                        }),
                    };
                },
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            organisation_module_1.OrganisationModule,
            user_module_1.UserModule,
            task_module_1.TaskModule,
        ],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: all_exception_filter_1.AllExceptionFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_interceptor_1.ResponseInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map