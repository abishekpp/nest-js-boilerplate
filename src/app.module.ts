import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './modules/example/example.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [ExampleModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
