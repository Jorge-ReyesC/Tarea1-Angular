import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'error',component:Error404Component},
  {path:'login',component:LoginComponent},
  {path:'password',component:PasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'table',component:TablesComponent},
  {path:'error500',component:Error500Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
