import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//authenticate module
import {LoginComponent} from './authenticate/login/login.component'
import { RegisterComponent } from './authenticate/register/register.component';

//home module
import { HomeComponent } from './chat/home/home.component'
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'register',component: RegisterComponent},
  {path : 'chat',
    children : [
      {path: 'home', component: HomeComponent, canActivate:[AuthGuard]}
    ] },
  // redirects to Login page
  { path: '**', component  : LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
