import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from "./errors/error.component";
import { SharedRoutingModule } from "./shared-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [ErrorComponent]
})
export class SharedModule { }
