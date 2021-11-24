import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../_guards/auth-guard.service';
import { EditSongComponent } from './EditSong.component';

const routes: Routes = [{path:'',component: EditSongComponent,canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditsongmodRoutingModule { }
