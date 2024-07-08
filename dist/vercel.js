"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = require("express");
const app_module_1 = require("./src/app.module");
const main_1 = require("./src/main");
const server = (0, express_1.default)();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    await (0, main_1.setupApp)(app);
    await app.init();
}
bootstrap();
exports.default = server;
//# sourceMappingURL=vercel.js.map