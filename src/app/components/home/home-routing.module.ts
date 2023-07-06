import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { CuriculumComponent } from "./curiculum/curiculum.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path:'login', component: LoginComponent },
//   { path:'cv', component: CuriculumComponent },
//   // { path:'error',
//   //   loadChildren: () => import('./../../shared/shared.module').then(m => m.SharedModule)
//   // },
//   // {path:'users', component:UsersComponent,children:[{path:':id/:name',component:UserComponent}]},
//   // {path:'servers', canActivateChild:[AuthGuard],component:ServersComponent,children:[{path:':id/edit',canDeactivate:[CanDeactivateGuard],component:EditServerComponent},
//   //     {path:':id',component:ServerComponent}]},
//   { path:'**',redirectTo:'/home',pathMatch:'full' }
]
//
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
