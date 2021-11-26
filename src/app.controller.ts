import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/first-name')
  getFirstName(): string{
    return this.appService.getFirstName();
  }

  @Get('/last-name')
  getLastName(): string {
    return this.appService.getLastName();
  }
}
