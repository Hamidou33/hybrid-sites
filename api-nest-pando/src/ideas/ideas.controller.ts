import { Controller, Get, Post, Body } from '@nestjs/common';
import {IdeasService} from "../services/ideas.service";
import {Idea} from "../interfaces/ideas.interface";

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
