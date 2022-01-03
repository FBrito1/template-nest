import { HttpException, HttpStatus } from '@nestjs/common';
import { errorDictResponse } from './error.dictonaries';
import { ErrorEnum } from './error.enum';

class AppError extends HttpException {
  constructor(errorEnum: ErrorEnum, errorStatus: HttpStatus) {
    const dictResponse = errorDictResponse(errorEnum, errorStatus);

    super(
      {
        statusCode: dictResponse.statusCode,
        message: dictResponse.message,
        responseCode: dictResponse.responseCode,
      },
      errorStatus,
    );
  }
}

export { AppError };
