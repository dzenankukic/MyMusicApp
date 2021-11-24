import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ListSongComponent } from './MyMusicApp/ListSong/ListSong.component';
//import { EditSongComponent } from './MyMusicApp/EditSong/EditSong.component';
import { HomeSongComponent } from './MyMusicApp/HomeSong/HomeSong.component';
//import { AddSongComponent } from './MyMusicApp/AddSong/AddSong.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './MyMusicApp/Login/Login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NavComponent } from './MyMusicApp/Nav/Nav.component';
import { LoginmodModule } from './MyMusicApp/Login/loginmod.module';
//import { ListsongmodModule } from './MyMusicApp/ListSong/listsongmod.module';

//import { AddmodModule } from './MyMusicApp/addmod/addmod.module';



export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeSongComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
   /* FormsModule,
    CommonModule,
    NgbModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,*/
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44301"],
        disallowedRoutes: []
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
