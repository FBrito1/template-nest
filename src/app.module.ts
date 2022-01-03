import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [ConfigModule, HealthcheckModule],
  providers: [ConfigService],
})
export class AppModule {}
