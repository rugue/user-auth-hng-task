"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TaskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const env_validation_1 = require("../_common/validations/env.validation");
const rxjs_1 = require("rxjs");
let TaskService = TaskService_1 = class TaskService {
    constructor(httpService, ConfigService) {
        this.httpService = httpService;
        this.ConfigService = ConfigService;
        this.logger = new common_1.Logger(TaskService_1.name);
        this.baseUrl = this.ConfigService.get('NODE_ENV') === env_validation_1.Environment.Test
            ? 'https://user-auth-hng-task.onrender.com'
            : 'http://localhost:4000';
    }
    async handleCron() {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`${this.baseUrl}`).pipe((0, rxjs_1.map)(({ data }) => {
                return data;
            }), (0, rxjs_1.catchError)((error) => {
                return (0, rxjs_1.throwError)(() => error);
            })));
            this.logger.log(response);
        }
        catch (error) {
            this.logger.error(error);
        }
    }
};
exports.TaskService = TaskService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskService.prototype, "handleCron", null);
exports.TaskService = TaskService = TaskService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], TaskService);
//# sourceMappingURL=task.service.js.map