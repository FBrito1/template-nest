import * as Convict from 'convict';

export enum ConfigEnum {
  APP_TITLE = 'APP_TITLE',
  APP_VERSION = 'APP_VERSION',
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
};
