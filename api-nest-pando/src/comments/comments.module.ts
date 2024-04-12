import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { Comments } from "./comments.entity/comments";

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {
}
