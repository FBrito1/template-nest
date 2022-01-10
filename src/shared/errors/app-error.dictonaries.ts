import { HttpStatus } from '@nestjs/common';
import { ErrorEnum } from './app-error.enum';

export type ErrorDictResponse = {
  responseCode: string;
  message: string;
  statusCode: number;
};

export const errorDictResponse = (
  errorEnum: ErrorEnum,
  errorStatus: HttpStatus,
): ErrorDictResponse => {
  const mappedErrors = {
    [ErrorEnum.UNKNOWN]: {
      responseCode: '001',
      message: 'Unknown error',
      statusCode: errorStatus,
    },
  };

  const defaultError = {
    responseCode: '999',
    message: 'Error Not Registered',
    statusCode: 500,
  };

  return mappedErrors[errorEnum] || defaultError;
};
