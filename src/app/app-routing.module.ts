import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {path: '', component: HomeComponent},
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
