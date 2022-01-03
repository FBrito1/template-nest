/* istanbul ignore file */

import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigEnum } from '../../config/config.schema';
import { ConfigService } from '../../config/config.service';

const DEFAULT_SWAGGER_PREFIX = '/swagger';

export const setupSwagger = (app: INestApplication) => {
  const configService: ConfigService = app.get(ConfigService);

  const options = new DocumentBuilder()
    .setTitle(configService.get(ConfigEnum.APP_TITLE))
    .setDescription(configService.get(ConfigEnum.APP_DESCRIPTION))
    .setVersion(configService.get(ConfigEnum.APP_VERSION))
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(DEFAULT_SWAGGER_PREFIX, app, document);
};
