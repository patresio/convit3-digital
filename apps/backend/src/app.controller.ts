import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/ping')
  getPing(): string {
    return 'pong';
  }
}
