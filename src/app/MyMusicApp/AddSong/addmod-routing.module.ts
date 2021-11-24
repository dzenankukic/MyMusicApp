import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../_guards/auth-guard.service';
import { AddSongComponent } from './AddSong.component';

const routes: Routes = [{path:'',component: AddSongComponent,canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddmodRoutingModule { }
