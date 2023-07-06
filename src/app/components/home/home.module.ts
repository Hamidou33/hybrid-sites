import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { CuriculumComponent } from "./curiculum/curiculum.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
@NgModule({
  imports: [ CommonModule, HomeRoutingModule ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContentComponent,
  ]
})
export class HomeModule { }
