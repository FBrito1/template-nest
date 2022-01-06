/* istanbul ignore file */

import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvironmentVariables } from '../../config/configuration';

const DEFAULT_SWAGGER_PREFIX = '/swagger';

export const setupSwagger = (app: INestApplication) => {
  const configService: ConfigService<EnvironmentVariables> =
    app.get(ConfigService);

  const options = new DocumentBuilder()
    .setTitle(configService.get('APP_TITLE'))
    .setDescription(configService.get('APP_DESCRIPTION'))
    .setVersion(configService.get('APP_VERSION'))
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(DEFAULT_SWAGGER_PREFIX, app, document);
};
