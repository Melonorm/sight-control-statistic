import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const PORT = process.env.HTTP_PORT || 3000;

  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // mvc

//  app.useGlobalPipes(new ValidationPipe())  // пайпы

  // mvc
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(
      PORT,
      () => console.log(`Server started at ${PORT} port...`));
}

bootstrap();
