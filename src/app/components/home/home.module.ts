import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HeaderComponent} from "./header/header.component";
import {ContentComponent} from "./content/content.component";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";
import {FormationComponent} from './formation/formation.component';
import {VenteComponent} from './vente/vente.component';
import {LocationComponent} from './location/location.component';
import {JavaComponent} from './java/java.component';
import {NodeComponent} from './node/node.component';
import {AngularComponent} from "./angular/angular.component";
import {HeaderDeskopComponent} from './header/header-deskop/header-deskop.component';
import {HeaderMobileComponent} from './header/header-mobile/header-mobile.component';
import {CvDeskopComponent} from './curiculum/cv-deskop/cv-deskop.component';
import {CvMobileComponent} from './curiculum/cv-mobile/cv-mobile.component';
import {HeaderCvMobileComponent} from './curiculum/cv-mobile/header-cv-mobile/header-cv-mobile.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateLoader, TranslateModule,} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {CreateTranslateLoader} from "../../app.module";
import {FreelanceModule} from "./freelance/freelance.module";

@NgModule({
  imports: [CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: CreateTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    FreelanceModule
  ],
  exports: [
    CvDeskopComponent,
    CvMobileComponent,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    ContentComponent,
    FormationComponent,
    VenteComponent,
    LocationComponent,
    JavaComponent,
    NodeComponent,
    AngularComponent,
    CvDeskopComponent,
    CvMobileComponent
  ]
})
export class HomeModule {
}
