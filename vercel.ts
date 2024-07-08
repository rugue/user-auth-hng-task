import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from 'src/app.module';
import { setupApp } from 'src/main';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  await setupApp(app);

  await app.init();
}

bootstrap();

export default server;
