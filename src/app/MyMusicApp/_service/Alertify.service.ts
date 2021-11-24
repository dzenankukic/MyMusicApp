import { Injectable } from '@angular/core';
import * as aleritfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

confrim(message: string, okCallback: any){
  aleritfy.confrim(message, (e: any)=>{
    if(e)
    {
      okCallback();
    }else{}
  });
}

success(message: string){
  aleritfy.success(message);
}

error(message: string){
  aleritfy.error(message);
}

warning(message: string){
  aleritfy.warning(message);
}

message(message: string){
  aleritfy.message(message);
}
}
