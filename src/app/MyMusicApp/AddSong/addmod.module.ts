import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmodRoutingModule } from './addmod-routing.module';
import { AddSongComponent } from './AddSong.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSongComponent
  ],
  imports: [
    CommonModule,
    AddmodRoutingModule,
    FormsModule,

  ]
})
export class AddmodModule { }
