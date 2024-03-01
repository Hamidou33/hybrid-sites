import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { IdeasModule } from './ideas/ideas.module';
import { User } from './users/user.entity/user.entity';
import { Idea } from './ideas/ideas/ideas.entity/ideas.entity';
import { Item } from './items/items/items.entity/item.entity';

@Module({
  imports: [
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
          entities: [User, Idea, Item],
        }
      }
    }),
    UsersModule,
    ItemsModule,
    IdeasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
