import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection
} from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import { routes } from "./app.routes";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

export function CreateTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const provideTranslation = () => ({
  defaultLanguage: localStorage.getItem("locale") || "fr",
  loader: {
    provide: TranslateLoader,
    useFactory: CreateTranslateLoader,
    deps: [HttpClient]
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    importProvidersFrom([
      TranslateModule.forRoot(provideTranslation())
    ])
  ]
};
