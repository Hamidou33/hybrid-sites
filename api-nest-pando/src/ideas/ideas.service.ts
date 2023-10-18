import { Injectable, PreconditionFailedException } from "@nestjs/common";
import { Idea } from './ideas/ideas.entity/ideas.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";

@Injectable()
export class IdeasService {
  private readonly ideas: Idea[] = [];

  constructor(@InjectRepository(Idea) private ideasRepository: Repository<Idea>) {
  }

  getIdeas(): Idea[] {
    return this.ideas;
  }

  // createIdea(idea: Idea): Idea {
  //   console.log('createIdea', idea)
  //   // Générez un ID unique pour l'idée (cela peut être fait de différentes manières).
  //   const ideaId = this.ideas.length + 1;
  //   const newIdea = { ...idea, id: ideaId  };
  //   console.log('newIdea', newIdea);
  //   this.ideas.push(newIdea);
  //   return newIdea;
  //   // return idea;
  // }

  createIdea(idea: Partial<Idea>): Observable<Idea> {
    if (!idea.dateEnvoi) {
      idea.dateEnvoi = new Date();
    }
    if (!idea.description && idea.description.length <= 0) {
      throw new PreconditionFailedException('La description est manquante');
    }
    return from(this.ideasRepository.save(idea));
  }


  async updateIdea(idea: Idea) {
    await this.ideasRepository.save(idea)
  }

  async deleteIdea(idea: Idea) {
    await this.ideasRepository.delete(idea);
  }
}
