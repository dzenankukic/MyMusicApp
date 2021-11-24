import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginmodRoutingModule } from './loginmod-routing.module';
import { LoginComponent } from './Login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginmodRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class LoginmodModule { }
