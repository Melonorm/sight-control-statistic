import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const PORT = process.env.HTTP_PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())  // пайпы
  await app.listen(
      PORT,
      () => console.log(`Server started at ${PORT} port...`));
}
bootstrap();