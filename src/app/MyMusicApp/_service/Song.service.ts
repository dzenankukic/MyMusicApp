import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyConfig } from 'src/app/MyConfig';

@Injectable({
  providedIn: 'root'
})
export class SongService {

constructor(private http: HttpClient) { }
getall(): Observable<any>
{
 return this.http.get(MyConfig.url+ 'Song',MyConfig.httpOpcije);
}
getbyid(id: number): Observable<any>
{
 return this.http.get(MyConfig.url+ 'Song/'+ id,MyConfig.httpOpcije);
}
create(data: any): Observable<any> {
  return this.http.post(MyConfig.url + 'Song', data);
}
edit(data: any,id:any): Observable<any> {
  return this.http.put(MyConfig.url + 'Song/' + id, data);
}
delete(id:any): Observable<any> {
  return this.http.delete(MyConfig.url + 'Song/' + id);
}
}
