import { Controller, Get } from '@nestjs/common';
import { CatsService } from "../services/cats.service";
import {Cat} from "../interfaces/cat.interface";

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
