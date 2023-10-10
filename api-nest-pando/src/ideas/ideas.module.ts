import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idea } from './ideas/ideas.entity/ideas.entity';
import { IdeasService } from './ideas.service';
import { IdeasController } from './ideas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Idea])],
  providers: [IdeasService],
  controllers: [IdeasController],
})
export class IdeasModule {}
