import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { CuriculumComponent } from "./curiculum/curiculum.component";
import { HomeComponent } from "./home.component";
import {FormationComponent} from "./formation/formation.component";
import {LocationComponent} from "./location/location.component";
import {VenteComponent} from "./vente/vente.component";
import {AngularComponent} from "./angular/angular.component";
import {JavaComponent} from "./java/java.component";
import {NodeComponent} from "./node/node.component";
import {FreelanceComponent} from "./freelance/freelance.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'cv', component: CuriculumComponent },
  { path: 'formation', component: FormationComponent},
  { path: 'location', component: LocationComponent},
  { path: 'vente', component: VenteComponent},
  { path: 'freelance', component: FreelanceComponent},
  { path: 'angular', component: AngularComponent},
  { path: 'java', component: JavaComponent},
  { path: 'node', component: NodeComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
