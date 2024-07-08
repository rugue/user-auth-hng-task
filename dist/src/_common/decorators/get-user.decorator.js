"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
exports.GetUser = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return (0, class_validator_1.isNotEmptyObject)(request?.user) ? request.user : null;
});
//# sourceMappingURL=get-user.decorator.js.map