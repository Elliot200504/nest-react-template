import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_NAME } from 'shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
  console.log(`${APP_NAME} api listening`);
}
bootstrap();
