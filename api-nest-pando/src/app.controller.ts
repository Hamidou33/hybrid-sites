import {Controller, Get, Header, HttpCode, Param, Post, Req} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('titre')
  @HttpCode(200)
  getTitre(): string {
    return this.appService.getTitre();
  }
}
