import { Module } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { HealthcheckController } from './healthcheck.controller';
import { ConfigService } from '../config/config.service';

@Module({
  controllers: [HealthcheckController],
  providers: [HealthcheckService, ConfigService],
})
export class HealthcheckModule {}
