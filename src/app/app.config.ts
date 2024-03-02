import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NestService } from "./shared/services/nest/nest.service";

export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslation = () => ({
  defaultLanguage: localStorage.getItem('locale') || 'fr',
  loader: {
    provide: TranslateLoader,
    useFactory: CreateTranslateLoader,
    deps: [HttpClient],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), NestService,
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation())
    ]),
  ],
};
