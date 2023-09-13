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
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [
    HeaderComponent
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
    AngularComponent
  ]
})
export class HomeModule { }
