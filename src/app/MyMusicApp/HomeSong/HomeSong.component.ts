import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-HomeSong',
  templateUrl: './HomeSong.component.html',
  styleUrls: ['./HomeSong.component.css']
})
export class HomeSongComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit() {
  }

  isUserAuthenticated(){
    const token: any = localStorage.getItem("jwt");
    if(token && this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(['/']);
  }
}
