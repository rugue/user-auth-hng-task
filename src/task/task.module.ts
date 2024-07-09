import { Module } from '@nestjs/common';
import { CronService } from './task.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CronService],
})
export class TaskModule {}
