import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { Idea } from './ideas/ideas.entity/ideas.entity';
import { Observable } from 'rxjs';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  // @Get()
  // getIdeas(): Idea[] {
  //   return this.ideasService.getIdeas();
  // }
  //
  // @Post()
  // createIdea(@Body() idea: Idea): Idea {
  //   return this.ideasService.updateIdea(idea);
  // }

  // @Get(':id')
  // get(@Param() params) {
  //   return this.ideasService.getIdeas(params.id);
  // }

  @Post()
  create(@Body() idea: Partial<Idea>): Observable<Idea> {
    console.log('create idea controller', idea);
    return this.ideasService.createIdea(idea);
  }

  @Put()
  update(@Body() idea: Idea) {
    return this.ideasService.updateIdea(idea);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.ideasService.deleteIdea(params.id);
  }
}
