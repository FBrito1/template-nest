import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppError, ErrorEnum } from '../shared/errors';

@ApiTags('healthcheck')
@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Get()
  @ApiOperation({ summary: 'Get application liveness' })
  @ApiResponse({
    status: 200,
    description: 'Return application status',
  })
  @ApiResponse({
    status: 503,
    description: 'Service Unavailable.',
  })
  public async check(): Promise<any> {
    try {
      return this.healthcheckService.check();
    } catch (error) {
      throw new HttpException(error.response, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  @Get('complete/')
  @ApiOperation({ summary: 'Get application liveness and dependencies status' })
  @ApiResponse({
    status: 200,
    description: 'Return application dependencies status',
  })
  @ApiResponse({
    status: 503,
    description: 'Service Unavailable.',
  })
  public async checkComplete(): Promise<any> {
    try {
      throw new Error('testing');
      return this.healthcheckService.checkComplete();
    } catch (error) {
      throw new AppError(ErrorEnum.UNKNOWN, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }
}
