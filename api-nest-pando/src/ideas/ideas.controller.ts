import { Body, Controller, Get, Post } from '@nestjs/common';
import { IdeasService } from './ideas.service';
import { Idea } from './ideas/ideas.entity/ideas.entity';

@Controller('ideas')
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}

  @Get()
  getIdeas(): Idea[] {
    return this.ideasService.getIdeas();
  }

  @Post()
  createIdea(@Body() idea: Idea): Idea {
    return this.ideasService.createIdea(idea);
  }
}
