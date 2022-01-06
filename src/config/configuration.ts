export const loadConfiguration = () => ({
  APP_TITLE: 'template-nest',
  APP_VERSION: '0.1.0',
  APP_DESCRIPTION: 'Template Nest',
  APP_PORT: process.env.APP_PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
});

export type EnvironmentVariables = {
  APP_TITLE: string;
  APP_VERSION: string;
  APP_DESCRIPTION: string;
  APP_PORT: number;
  MONGO_URI: string;
};
