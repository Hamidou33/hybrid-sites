import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NestService } from "./shared/services/nest/nest.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./components/home/login/login.component";
import { CuriculumComponent } from "./components/home/curiculum/curiculum.component";
import { HighchartsChartModule } from 'highcharts-angular';
import { NgOptimizedImage} from "@angular/common";
import { HomeModule} from "./components/home/home.module";
import { ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CuriculumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule,
    NgOptimizedImage,
    HomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSlideToggleModule
  ],
  providers: [NestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
