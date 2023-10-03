import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from "./components/home/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  // { path:'', component: LoginComponent,  canActivate: [AuthGuard] },
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
