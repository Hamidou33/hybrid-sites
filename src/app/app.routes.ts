import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/home/login/login.component";
import { FormationComponent } from "./components/home/formation/formation.component";
import { ErrorComponent } from "./shared/errors/error.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', children : [
        {path: '', component: HomeComponent},
        {path: 'login', title: 'home | login', component: LoginComponent},
        {path: 'formation', title: 'home | formation', component: FormationComponent}
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
    path: 'params',
    children : [],
    loadComponent: () => import('./components/parametres/parametres.component').then(m => m.ParametresComponent)
  },
  {path: '**', component: ErrorComponent},
];
