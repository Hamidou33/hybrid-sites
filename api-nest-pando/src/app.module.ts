import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsService} from "./cats/cats.service";
import {UserService} from "./user/user.service";
import {IdeasService} from "./ideas/ideas.service";
import {ItemsService} from "./items/items.service";
import {CatsController} from "./cats/cats.controller";
import {AdminController} from "./admin/admin.controller";
import {ItemsController} from "./items/items.controller";
import {IdeasController} from "./ideas/ideas.controller";

@Module({
  imports: [
    //   TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   password: 'simform',
    //   username: 'postgres',
    //   entities: [],
    //   database: 'pgWithNest',
    //   synchronize: true,
    //   logging: true,
    // })
  ],

  controllers: [AppController, CatsController, AdminController, ItemsController, IdeasController],
  providers: [AppService, CatsService, UserService, IdeasService, ItemsService],
})
export class AppModule {
}
