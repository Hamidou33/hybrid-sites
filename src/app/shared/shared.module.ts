import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from "./errors/error.component";
import {SharedRoutingModule} from "./shared-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {LanguageSelectorComponent} from './components/language-selector/language-selector.component';
import {HeaderDeskopComponent} from "../components/home/header/header-deskop/header-deskop.component";
import {HeaderMobileComponent} from "../components/home/header/header-mobile/header-mobile.component";
import {CvDeskopComponent} from "../components/home/curiculum/cv-deskop/cv-deskop.component";
import {CvMobileComponent} from "../components/home/curiculum/cv-mobile/cv-mobile.component";
import {
  HeaderCvMobileComponent
} from "../components/home/curiculum/cv-mobile/header-cv-mobile/header-cv-mobile.component";
import {HeaderComponent} from "../components/home/header/header.component";
import {CreateTranslateLoader} from "../app.module";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
  ],
  exports: [
    LanguageSelectorComponent,
    HeaderDeskopComponent,
    HeaderMobileComponent,
    HeaderComponent,
    HeaderCvMobileComponent,
    TranslateModule
  ],
  declarations: [ErrorComponent,
    LanguageSelectorComponent,
    HeaderDeskopComponent,
    HeaderMobileComponent,
    HeaderComponent,
    HeaderCvMobileComponent
  ]
})
export class SharedModule {
}
