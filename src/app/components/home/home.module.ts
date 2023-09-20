import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { CuriculumComponent } from "./curiculum/curiculum.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { FormationComponent } from './formation/formation.component';
import { VenteComponent } from './vente/vente.component';
import { LocationComponent } from './location/location.component';
import { JavaComponent } from './java/java.component';
import { NodeComponent } from './node/node.component';
import {AngularComponent} from "./angular/angular.component";
import { HeaderDeskopComponent } from './header/header-deskop/header-deskop.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { CvDeskopComponent } from './curiculum/cv-deskop/cv-deskop.component';
import { CvMobileComponent } from './curiculum/cv-mobile/cv-mobile.component';
import { HeaderCvMobileComponent } from './curiculum/cv-mobile/header-cv-mobile/header-cv-mobile.component';
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    HeaderComponent,
    HeaderDeskopComponent,
    CvDeskopComponent,
    CvMobileComponent
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FormationComponent,
    VenteComponent,
    LocationComponent,
    JavaComponent,
    NodeComponent,
    AngularComponent,
    HeaderDeskopComponent,
    HeaderMobileComponent,
    CvDeskopComponent,
    CvMobileComponent,
    HeaderCvMobileComponent
  ]
})
export class HomeModule { }
