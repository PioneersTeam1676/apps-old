import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }

  @Get('login')
  getLogin(): string {
    return this.appService.getLogin();
  }*/
}