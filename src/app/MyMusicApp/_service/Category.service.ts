import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyConfig } from 'src/app/MyConfig';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http:HttpClient) { }
getall(): Observable<any>
{
 return this.http.get(MyConfig.url + 'Category',MyConfig.httpOpcije);
}
getbyid(id: number): Observable<any>
{
 return this.http.get(MyConfig.url + 'Category/' + id,MyConfig.httpOpcije);
}

}
