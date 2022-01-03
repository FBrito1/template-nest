import * as Convict from 'convict';

export interface TConfigSchema {
  PORT: number;
}

export const ConfigSchema: Convict.Schema<TConfigSchema> = {
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
