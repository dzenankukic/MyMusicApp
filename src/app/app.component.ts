import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mymusicapp';
constructor(private router:Router){

}/*
ngOnInit(){
  this.active();
}
logout(){
  localStorage.removeItem("jwt");
  this.router.navigate(['/']);
}
log:boolean | undefined;
active()
{
  const token = localStorage.getItem("jwt");
  if(token)
  {
    this.log = true;
  }
  else{
    this.log = false;
  }
}*/
}
