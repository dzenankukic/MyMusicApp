import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_service/Alertify.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router,private ajs:AlertifyService) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(['/']);
    this.ajs.error("You successfully logout!")
  }
  log:boolean | undefined;
  loggedin()
  {
    return localStorage.getItem("jwt");
  }
}
