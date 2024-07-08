import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TaskService],
})
export class TaskModule {}
