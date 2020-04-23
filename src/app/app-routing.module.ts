import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'users' , component:UserListComponent},
  {path: 'log', component:LoginComponent},
  {path: '', redirectTo: 'log', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [UserListComponent,LoginComponent]