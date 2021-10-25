import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { TablesComponent } from './tables/tables.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    TablesComponent,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
