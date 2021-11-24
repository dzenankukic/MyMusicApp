import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../_guards/auth-guard.service';
import { ListSongComponent } from './ListSong.component';

const routes: Routes = [{path:'',component: ListSongComponent,canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsongmodRoutingModule { }
