import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'nest-boilerplate',
      logLevels: ['log', 'error', 'warn', 'debug', 'verbose'],
      timestamp: true,
      colors: true,
    }),
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
