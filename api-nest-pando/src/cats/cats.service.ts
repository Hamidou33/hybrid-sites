import {Injectable} from '@nestjs/common';
import {Cat} from "./cat.interface";


@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{
    id: 1,
    name: 'chico',
    age: 2,
    breed: 'test'
  }];

  findAll(): Cat[] {
    return this.cats;
  }
}
