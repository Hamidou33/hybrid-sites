import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'error',
    loadComponent: () => import('./shared/errors/error.component').then(m => m.ErrorComponent)
  },
  {path: '**', redirectTo: ''},
];
