import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarLoginInfoComponent } from './components/navbar-login-info/navbar-login-info.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MustChangePasswordComponent } from './components/must-change-password/must-change-password.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    NavbarLoginInfoComponent,
    ChangePasswordComponent,
    MustChangePasswordComponent,
    AuthComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
