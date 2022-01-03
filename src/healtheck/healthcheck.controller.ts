import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get()
  public async check(): Promise<any> {
    try {
      return this.healthcheckService.check();
    } catch (error) {
      throw new HttpException(error.response, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  @Get('complete/')
  public async checkComplete(): Promise<any> {
    try {
      return this.healthcheckService.checkComplete();
    } catch (error) {
      throw new HttpException(error.response, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }
}
