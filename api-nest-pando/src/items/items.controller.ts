import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): any[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): any {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: any): any {
    return this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedItem: any): any {
    return this.itemsService.update(id, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: number): any {
    return this.itemsService.delete(id);
  }
}
