import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly envConfig: Record<string, string>;
  constructor() {
    // Sélection de l'environnement en fonction de NODE_ENV
    const environment = process.env.NODE_ENV || 'development';

    // Définition des valeurs en fonction de l'environnement
    if (environment === 'production') {
      this.envConfig = {
        DATABASE_TYPE: 'mysql',
        DATABASE_HOST: 'pandoramid.com',
        DATABASE_PORT: '3306',
        DATABASE_USER: 'u641340594_hamid33130',
        DATABASE_PASSWORD: 'Aburame13$',
        DATABASE_NAME: 'u641340594_Pandoramid',
        DATABASE_SYNCHRONISATION: 'false',
      };
    } else {
      this.envConfig = {
        DATABASE_TYPE: 'mysql',
        DATABASE_HOST: 'localhost',
        DATABASE_PORT: '3109',
        DATABASE_USER: 'root',
        DATABASE_PASSWORD: 'Aburame13$',
        DATABASE_NAME: 'pandoramid',
        DATABASE_SYNCHRONISATION: 'true',
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}




