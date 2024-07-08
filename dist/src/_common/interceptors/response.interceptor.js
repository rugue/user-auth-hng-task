"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const operators_1 = require("rxjs/operators");
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((responseData) => {
            let data = responseData || null;
            let message = 'Success';
            if (typeof data === 'string') {
                message = data;
                data = null;
            }
            else if (typeof data === 'boolean') {
                message = 'Success';
            }
            else if (!data?.hasOwnProperty('message')) {
                data = data?.data || data;
            }
            else {
                message = data?.message;
                delete data.message;
            }
            const transformedResponse = {
                status: 'success',
                message,
            };
            if (!(0, class_validator_1.isEmpty)(data)) {
                transformedResponse.data = data;
            }
            return transformedResponse;
        }));
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map