import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FreelanceComponent} from "./freelance.component";
import {HomeModule} from "../home.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {CreateTranslateLoader} from "../../../app.module";
import {HttpClient} from "@angular/common/http";
import {SharedModule} from "../../../shared/shared.module";
import {HeaderDeskopComponent} from "../header/header-deskop/header-deskop.component";

@NgModule({
  declarations: [FreelanceComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [
    SharedModule
  ]
})
export class FreelanceModule {
}
