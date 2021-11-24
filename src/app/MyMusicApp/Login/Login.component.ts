import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../_service/Alertify.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private ajs:AlertifyService) { }

  ngOnInit() {
  }
  invalidLogin: boolean | undefined;
  login(form: NgForm)
  {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password,
    }

    this.http.post("https://localhost:44301/api/auth/login",credentials).subscribe(response=>{
      const token = (<any>response).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin = false;
      this.router.navigate(["/list"]);
      this.ajs.success("You successfully login!");
    },err =>{
      this.invalidLogin = true;
    });
  }

}
