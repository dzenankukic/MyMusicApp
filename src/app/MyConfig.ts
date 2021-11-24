import {HttpHeaders} from '@angular/common/http';

export class MyConfig{
  static adresaServera: string = 'https://localhost:5001/';
  static httpOpcije= {
    headers:new HttpHeaders({
      "Content-Type": "application/json",
    })
  };
  static url : string = "https://localhost:44301/api/";
}


