import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./components/home/login/login.component";

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path:'error',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
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
