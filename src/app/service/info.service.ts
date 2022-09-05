import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  URL='http://localhost:8080/info/';



  constructor(private httpClient: HttpClient) { }
  public Lista(): Observable<Info[]>{
    return this.httpClient.get<Info[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Info>{
    return this.httpClient.get<Info>(this.URL + `detail/${id}`);
  }

  public save(info:Info): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', info);
  }

  public update(id:number, info:Info): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, info);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

  
}
