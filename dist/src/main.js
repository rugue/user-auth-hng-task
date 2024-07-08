"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = setupApp;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const env_validation_1 = require("./_common/validations/env.validation");
const app_module_1 = require("./app.module");
async function setupApp(app) {
    app.useGlobalPipes(new common_1.ValidationPipe({
        validationError: {
            target: false,
            value: false,
        },
        exceptionFactory: (validationErrors = []) => {
            const transformed = validationErrors.map((error) => {
                const message = Object.values(error.constraints)[0];
                return {
                    field: error.property,
                    message,
                };
            });
            return new common_1.UnprocessableEntityException(transformed);
        },
    }));
    const configService = app.get((config_1.ConfigService));
    const isProduction = configService.get('NODE_ENV') === env_validation_1.Environment.Production;
    if (!isProduction) {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('HNG AUTH SERVER')
            .setDescription('The cats API description')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await setupApp(app);
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map