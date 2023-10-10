import { Injectable } from '@nestjs/common';
import { Idea } from './ideas/ideas.entity/ideas.entity';

@Injectable()
export class IdeasService {
  private readonly ideas: Idea[] = [];

  getIdeas(): Idea[] {
    return this.ideas;
  }

  createIdea(idea: Idea): Idea {
    // Générez un ID unique pour l'idée (cela peut être fait de différentes manières).
    const ideaId = this.ideas.length + 1;
    const newIdea = { ...idea, id: ideaId };
    this.ideas.push(newIdea);
    return newIdea;
  }
}
