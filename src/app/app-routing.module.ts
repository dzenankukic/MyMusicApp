import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AddSongComponent } from './MyMusicApp/AddSong/AddSong.component';
//import { EditSongComponent } from './MyMusicApp/EditSong/EditSong.component';
import { HomeSongComponent } from './MyMusicApp/HomeSong/HomeSong.component';
import { ListSongComponent } from './MyMusicApp/ListSong/ListSong.component';
import { LoginComponent } from './MyMusicApp/Login/Login.component';
import { AuthGuardService } from './MyMusicApp/_guards/auth-guard.service';

const routes: Routes = [
{path: "", component: HomeSongComponent},
  //{path:'list',component: ListSongComponent,canActivate: [AuthGuardService]},
{path:'list',loadChildren: ()=> import('./MyMusicApp/ListSong/listsongmod.module').then(m=> m.ListsongmodModule)},
 /* {path:'edit/:id',component: EditSongComponent,canActivate: [AuthGuardService]},*/
{path:'edit/:id',loadChildren: ()=> import('./MyMusicApp/EditSong/editsongmod.module').then(m=> m.EditsongmodModule)},
/*  {path:'add',component: AddSongComponent,canActivate: [AuthGuardService]},*/
{path:'add',loadChildren: ()=> import('./MyMusicApp/AddSong/addmod.module').then(m=> m.AddmodModule)},
{path:'login',loadChildren: ()=> import('./MyMusicApp/Login/loginmod.module').then(m=> m.LoginmodModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
