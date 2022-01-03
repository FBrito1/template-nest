import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class HealthcheckService {
  constructor(private readonly configService: ConfigService) {}

  public async check(): Promise<any> {
    return { status: 'ok' };
  }

  public async checkComplete(): Promise<any> {
    return {
      meta: {
        name: this.configService.get('APP_TITLE'),
        version: this.configService.get('APP_VERSION'),
      },
      status: 'ok',
      dependencies: [],
    };
  }
}
