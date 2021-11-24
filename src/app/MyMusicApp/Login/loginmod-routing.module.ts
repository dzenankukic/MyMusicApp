import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../_guards/auth-guard.service';
import { LoginComponent } from './Login.component';

const routes: Routes = [{path:'',component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginmodRoutingModule { }
