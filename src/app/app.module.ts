import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NestService } from "./shared/services/nest/nest.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./components/home/login/login.component";
import { CuriculumComponent } from "./components/home/curiculum/curiculum.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CuriculumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
