import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FreelanceComponent} from "./freelance.component";

const routes: Routes = [
  {path: '', component: FreelanceComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelanceRoutingModule {
}
