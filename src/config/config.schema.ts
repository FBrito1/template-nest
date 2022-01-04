import * as Convict from 'convict';

export enum ConfigEnum {
  APP_TITLE = 'APP_TITLE',
  APP_VERSION = 'APP_VERSION',
  APP_DESCRIPTION = 'APP_DESCRIPTION',
  APP_PORT = 'APP_PORT',
  APP_CPUS_LIMIT = 'APP_CPUS_LIMIT',
}

export const ConfigSchema: Convict.Schema<ConfigEnum> = {
  APP_TITLE: {
    doc: 'Application title',
    format: String,
    default: 'template-nest',
  },
  APP_VERSION: {
    doc: 'Application version',
    format: String,
    default: '0.1.0',
  },
  APP_DESCRIPTION: {
    doc: 'Application description',
    format: String,
    default: 'Template Nest',
  },
  APP_PORT: {
    doc: 'Server port',
    format: 'port',
    env: 'APP_PORT',
    default: 3000,
  },
  APP_CPUS_LIMIT: {
    doc: 'Number of cpus available for cluster mode',
    format: Number,
    env: 'APP_CPUS_LIMIT',
    default: 1,
  },
};
