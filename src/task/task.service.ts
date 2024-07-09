import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  Environment,
  EnvironmentVariables,
} from 'src/_common/validations/env.validation';
import { catchError, lastValueFrom, map, tap, throwError } from 'rxjs';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  readonly baseUrl =
    this.ConfigService.get('NODE_ENV') === Environment.Test
      ? 'https://user-auth-hng-task.onrender.com'
      : 'http://localhost:4000';

  constructor(
    private readonly httpService: HttpService,
    private readonly ConfigService: ConfigService<EnvironmentVariables>,
  ) {}

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`${this.baseUrl}`).pipe(
          map(({ data }) => {
            return data;
          }),
          catchError((error) => {
            return throwError(() => error);
          }),
        ),
      );

      this.logger.log(response);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
