import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ListsongmodRoutingModule } from './listsongmod-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { ListSongComponent } from './ListSong.component';


@NgModule({
  declarations: [
    ListSongComponent
  ],
  imports: [
    CommonModule,
    ListsongmodRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    NgxPaginationModule,
  ],
   providers: [DatePipe],
})
export class ListsongmodModule { }
