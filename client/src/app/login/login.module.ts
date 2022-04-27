import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginMainComponent } from './login-main/login-main.component';
import { PrimengModule } from '../shared/modules/primeng/primeng.module';


@NgModule({
  declarations: [
    LoginMainComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PrimengModule
  ]
})
export class LoginModule { }
