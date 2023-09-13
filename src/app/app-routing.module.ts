import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./components/home/login/login.component";
import { AuthGuard } from "./shared/services/helper/auth.guard";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path:'', component: LoginComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path:'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path:'error',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  { path: '**', redirectTo: '' },
  // {path:'users', component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
  // {path:'servers', canActivateChild:[AuthGuard],component:ServersComponent,children:[{path:':id/edit',canDeactivate:[CanDeactivateGuard],component:EditServerComponent},
  //     {path:':id',component:ServerComponent}]},
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule]
})
export class AppRoutingModule {
}
