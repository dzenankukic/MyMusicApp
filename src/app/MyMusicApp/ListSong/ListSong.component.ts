import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from '../_service/Alertify.service';
import { CategoryService } from '../_service/Category.service';
import { SongService } from '../_service/Song.service';

@Component({
  selector: 'app-ListSong',
  templateUrl: './ListSong.component.html',
  styleUrls: ['./ListSong.component.css']
})
export class ListSongComponent implements OnInit {
  alertify: any;
  p:number =1;
  constructor(private modalService: NgbModal,private router: Router,
  private ss: SongService,private ajs:AlertifyService, private cs: CategoryService
    ) { }
  ngOnInit() {
    this.preuzmipodatke();
    this.getcategory();
  }
 data: any;
  preuzmipodatke(){
    this.ss.getall()
    .subscribe((result)=>{
      console.log(result);
      this.data = result;
      this.totalLength = result.length;
      console.log(this.data);
    });
}
obrisi(s: any) {
  this.ajs.error("You successfully delete song!");
  let indexof = this.data.indexOf(s) ?? 0;
  this.data.splice(indexof, 1);
  return this.ss.delete(s.id).subscribe((result)=>{
    console.log(result);
  });
}

EditSong : any | undefined;
uredi(s: number) {
  console.log(this.EditSong)
  this.ss.getbyid(s).subscribe((result) => {
    this.EditSong = result;
    this.router.navigate(['/edit',this.EditSong?.id]);
    console.log("Ovo je edit song",this.EditSong);
  });
}

songname: string | undefined;
Search()
{
   if(this.songname ==""){
       this.ngOnInit();
   }
   else{
   this.data = this.data.filter((res:any)=>{
    return res.name.toLocaleLowerCase().match(this.songname?.toLocaleLowerCase());
   });
  }
}
artistname: string | undefined;
SearchArtist()
{
   if(this.artistname ==""){
       this.ngOnInit();
   }
   else{
   this.data = this.data.filter((res:any)=>{
    return res.artistName.toLocaleLowerCase().match(this.artistname?.toLocaleLowerCase());
   });
  }
}
key: string | undefined;
reverse: boolean = false;
Sort(key: any){
this.key = key;
this.reverse = !this.reverse;
}
totalLength:any;
page:number=1;

selectedcategory:any;
selectedsong: any;
closeResult = '';
open(content:any,song:any) {
  this.selectedsong = song;
   this.cs.getbyid(this.selectedsong.categoryID).subscribe((result)=>{
  console.log(result);
  this.selectedcategory = result.name;
});
  console.log(this.selectedsong.songUrl);
  this.modalService.open(content);
}
categories:any;
getcategory(){
  this.cs.getall()
.subscribe((result)=>{
  console.log(result);
  this.categories = result;
});
}
/*
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}*/

}

