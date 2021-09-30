import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './authenticate/login/login.component'
import { RegisterComponent } from './authenticate/register/register.component';
const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'register',component: RegisterComponent},

  // redirects to home
  { path: '**', component  : LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
