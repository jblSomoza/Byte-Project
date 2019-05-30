import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Almacenadoras } from '../models/almacenadoras.model';



@Injectable()
export class AlmacenadorasService {

  constructor(public _http: HttpClient) { }


  listAlmacenadoras(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get('http://13.58.152.114:5000/v1/almacenadoras/list?empresa=1',{headers: headers});
  }

 readAlmacenadora(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(`http://13.58.152.114:5000/v1/almacenadoras/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}