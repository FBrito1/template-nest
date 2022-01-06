import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import compression from 'fastify-compress';
import helmet from 'fastify-helmet';
import { AppClusterService } from './app-cluster.service';
import { AppModule } from './app.module';
import { EnvironmentVariables } from './config/configuration';
import { setupSwagger } from './shared/docs/setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const configService: ConfigService<EnvironmentVariables> =
    app.get(ConfigService);
  app.enableCors();
  app.register(compression);
  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  setupSwagger(app);
  await app.listen(configService.get('APP_PORT'));
}

AppClusterService.clusterize(bootstrap);
