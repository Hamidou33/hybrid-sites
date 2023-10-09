import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getTitre(): string {
    return 'fait en Nest.js';
  }
}
