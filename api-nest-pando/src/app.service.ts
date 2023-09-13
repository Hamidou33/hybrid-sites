import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTitre(): string {
    return 'Bienvenue chez moi';
  }

  getLibelleNav(): string[] {
    const navArray: string[] = ['Angular', 'Java', 'Node'];
    return navArray;
  }
}
