import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { IdeasModule } from './ideas/ideas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3109,
      username: 'root',
      password: 'Aburame13$',
      database: 'pandoramid',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UsersModule,
    ItemsModule,
    IdeasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
