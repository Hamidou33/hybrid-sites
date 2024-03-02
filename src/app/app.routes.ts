import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/home/login/login.component";
import { FormationComponent } from "./components/home/formation/formation.component";
import { LocationComponent } from "./components/home/location/location.component";
import { VenteComponent } from "./components/home/vente/vente.component";
import { AngularComponent } from "./components/home/angular/angular.component";
import { JavaComponent } from "./components/home/java/java.component";
import { NodeComponent } from "./components/home/node/node.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'home', children : [
        {path: '', component: HomeComponent},
        {path: 'login', title: 'home | login', component: LoginComponent},
        {path: 'formation', title: 'home | formation', component: FormationComponent},
        {path: 'location', title: 'home | location', component: LocationComponent},
        {path: 'vente', title: 'home | vente', component: VenteComponent},
        {path: 'angular', title: 'home | angular', component: AngularComponent},
        {path: 'java', title: 'home | java', component: JavaComponent},
        {path: 'node', title: 'home | node', component: NodeComponent},
    ],
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'freelance',
    children : [],
    loadComponent: () => import('./components/freelance/freelance.component').then(m => m.FreelanceComponent)
  },
  {
    path: 'cv',
    children : [],
    loadComponent: () => import('./components/curiculum/curiculum.component').then(m => m.CuriculumComponent)
  },
  {
    path: 'portofolio',
    children : [],
    loadComponent: () => import('./components/portofolio/portofolio.component').then(m => m.PortofolioComponent)
  },
  {
    path: 'idea',
    children : [],
    loadComponent: () => import('./components/idee/idee.component').then(m => m.IdeeComponent)
  },
  {
    path: 'error',
    loadComponent: () => import('./shared/errors/error.component').then(m => m.ErrorComponent)
  },
  {path: '**', redirectTo: ''},
];
