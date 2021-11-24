import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../_service/Alertify.service';
import { CategoryService } from '../_service/Category.service';
import { SongService } from '../_service/Song.service';


@Component({
  selector: 'app-EditSong',
  templateUrl: './EditSong.component.html',
  styleUrls: ['./EditSong.component.css']
})
export class EditSongComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ss:SongService,
    public datepipe: DatePipe,private router:Router,private ajs:AlertifyService,
    private cs:CategoryService) { }

  ngOnInit() {
    console.warn(this.route.snapshot.params.id);
    this.get();
    this.getkategorije();
    let latest_date =this.datepipe.transform(this.today, 'yyyy-MM-dd'+ 'T00:00:00');
    console.warn(latest_date);
  }
  @Input()
  editsong: any;
  song: any;
  isActive=true;
  today = Date.now();
  invaliddata: boolean |undefined;
  get(){
   this.ss.getbyid(this.route.snapshot.params.id).subscribe((result)=>{
     this.editsong = result;
   });
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
  checkrate:any;
  onSubmit()
  {
    console.warn(this.editsong.categoryID);
    this.editsong.editDate = this.datepipe.transform(this.today, 'yyyy-MM-dd'+ 'T00:00:00');
    console.log(this.editsong);
    console.log("poslije");
    this.checkrate = Number(this.editsong.rating);
    if(this.editsong.name == "" || this.editsong.artistName == "" ||  this.editsong.rating == "" ||
    this.editsong.songUrl == "" || this.checkrate < 1 || this.checkrate > 5)
    {
      this.invaliddata = true;
      this.ajs.error("Invalid data, please check all inputs!");
    }
    else{
    this.ss.edit(this.editsong,this.editsong.id).subscribe((result)=>{
      console.log("Rezulatat");
      console.log(result);
    });
    this.ajs.warning("You successfully edit song!");
    this.router.navigate(['/list']);
  }
  }
}
