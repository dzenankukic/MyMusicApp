import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from '../_service/Alertify.service';
import { CategoryService } from '../_service/Category.service';
import { SongService } from '../_service/Song.service';

@Component({
  selector: 'app-AddSong',
  templateUrl: './AddSong.component.html',
  styleUrls: ['./AddSong.component.css']
})
export class AddSongComponent implements OnInit {

  constructor(private ss: SongService,private calendar: NgbCalendar
  ,private parserFormatter: NgbDateParserFormatter,private ajs:AlertifyService,
  private cs:CategoryService) { }

  checkfalse=false;

  addsong = {
    name: '',
    songUrl: '',
    artistName: '',
    rating: '',
    isFavourite: this.checkfalse,
    entredDAte: '',
    editDate: '',
    categoryID: '',
  };
  submitted = false;
  invaliddata: boolean | undefined;

  ngOnInit() {
    this.getkategorije();
    this.selectToday();
  }

checkrate:any;
  saveSong(): void {
    const data = {
      name: this.addsong.name,
      songUrl: this.addsong.songUrl,
      categoryID: this.addsong.categoryID,
      artistName: this.addsong.artistName,
      rating: this.addsong.rating,
      isFavourite: this.checkfalse,
      entredDAte: this.addsong.entredDAte,
      editDate: this.addsong.entredDAte,
    };

    this.checkrate = Number(data.rating);
    if(data.name == "" || data.artistName == "" || data.rating == "" || data.songUrl == "" ||
    this.checkrate < 1 || this.checkrate > 5 )
    {
      this.invaliddata = true;
      this.ajs.error("Invalid data, please check all inputs!");
    }
    else{
    console.warn(data);
    this.ss.create(data)
    .subscribe(
      response => {
        this.ajs.success("You successfully added new song!")
        console.log(response);
        this.submitted = true;

      },
      error => {
        this.ajs.error("Invalid data, please check all inputs!");
        console.log(error);
        this.invaliddata = true;
      });
    }
}
newSong(): void {
  this.submitted = false;
  this.addsong = {
    name: '',
    songUrl: '',
    artistName: '',
    rating: '',
    isFavourite: this.checkfalse,
    entredDAte: '',
    editDate: '',
    categoryID: '',
  };
}

  ajdikat:number|undefined;
  SelectCategory: any | undefined;
  Song: any | undefined;
  getkategorije()
  {
    return this.cs.getall().subscribe((result)=>{
      this.SelectCategory = result;
      console.log(this.SelectCategory);
    });
  }
model: NgbDateStruct | undefined;
selectToday() {
  this.model = this.calendar.getToday();
  console.log(this.model);
  let date1 = this.parserFormatter.format(this.model);
  this.addsong.entredDAte = date1 + 'T00:00:00';
  console.log(date1);
  console.log(this.addsong.entredDAte);
}
range = new FormGroup({
  start: new FormControl(),
  end: new FormControl(),

});

}
