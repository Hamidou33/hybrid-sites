import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommentDto } from "./comment.dto";
import * as fs from "fs";
import { Comments } from "./comments.entity/comments";

@Injectable()
export class CommentsService {
  private readonly filePath: string = "ideas.txt";

  constructor(
    @InjectRepository(Comments) private commmentsRepository: Repository<Comments>
  ) {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, "");
    }
  }

  async saveIdea(commentDto: CommentDto): Promise<void> {
    const formattedComment = `${commentDto.name} - ${commentDto.date}: ${commentDto.comment}\n`;
    fs.appendFileSync(this.filePath, formattedComment);
    await this.commmentsRepository.save(commentDto);
  }

  async deleteComment(id: number): Promise<void> {
    await this.commmentsRepository.delete(id);
  }

  async getAllComments(): Promise<Comments[]> {
    return this.commmentsRepository.find();
  }
}
