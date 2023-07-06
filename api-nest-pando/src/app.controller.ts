import {Controller, Get, Header, HttpCode, Param, Post, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'this action return all cats';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }




}
