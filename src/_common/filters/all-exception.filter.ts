import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception?.message || 'Internal server error';

    if (status === HttpStatus.UNPROCESSABLE_ENTITY) {
      const message = exception.response?.message || [];

      response.status(status).json({
        // statusCode: status,
        errors: exception.response?.message || message || null,
      });

      return;
    }

    response.status(status).json({
      statusCode: status,
      message,
      status: exception?.response?.error || 'Internal server error',
    });
  }
}
