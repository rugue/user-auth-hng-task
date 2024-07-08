import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Health check')
@ApiBearerAuth()
export class AppController {
  @Get()
  getById() {
    return 'healthy';
  }
}
