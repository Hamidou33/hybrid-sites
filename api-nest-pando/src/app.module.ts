import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { Comments } from './comments/comments.entity/comments';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: process.env['DATABASE_TYPE'] as any,
          host: process.env['DATABASE_HOST'],
          port: +process.env['DATABASE_PORT'],
          username: process.env['DATABASE_USER'],
          password: process.env['DATABASE_PASSWORD'],
          database: process.env['DATABASE_NAME'],
          synchronize: process.env['DATABASE_SYNCHRONISATION'] === 'true',
          entities: [Comments],
        }
      }
    }),
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
