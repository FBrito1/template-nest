import * as Convict from 'convict';

export enum ConfigEnum {
  APP_TITLE = 'APP_TITLE',
  APP_VERSION = 'APP_VERSION',
  APP_DESCRIPTION = 'APP_DESCRIPTION',
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
};
