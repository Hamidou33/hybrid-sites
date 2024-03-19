import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post
} from "@nestjs/common";
import { CommentsService } from './comments.service';
import { CommentDto } from "./comment.dto";
import { Comments } from "./comments.entity/comments";

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getComments(): Promise<Comments[] | { message: string }> {
    try {
      return await this.commentsService.getAllComments();
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.commentsService.deleteComment(id);
      return { message: 'Commentaire supprimé avec succès'};
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  @Post()
  async saveComment(@Body() commentDto: CommentDto): Promise <Comments[] | { message: string }> {
    try {
      await this.commentsService.saveIdea(commentDto);
      return this.commentsService.getAllComments();
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }
}
