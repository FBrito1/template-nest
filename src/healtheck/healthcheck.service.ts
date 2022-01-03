import { Injectable } from '@nestjs/common';
import { ConfigEnum } from '../config/config.schema';
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
        name: this.configService.get(ConfigEnum.APP_TITLE),
        version: this.configService.get(ConfigEnum.APP_VERSION),
      },
      status: 'ok',
      dependencies: [],
    };
  }
}
