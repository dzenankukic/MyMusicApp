import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EditsongmodRoutingModule } from './editsongmod-routing.module';
import { FormsModule } from '@angular/forms';
import { EditSongComponent } from './EditSong.component';


@NgModule({
  declarations: [
    EditSongComponent
  ],
  imports: [
    CommonModule,
    EditsongmodRoutingModule,
    FormsModule
  ], providers: [DatePipe]

})
export class EditsongmodModule { }
