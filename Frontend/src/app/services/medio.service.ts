import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedioContacto } from '../models/medio.model';
import { GLOBAL } from './global.service';

@Injectable()
export class MedioService {
  public url: String
  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  addMedio(medio: MedioContacto): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(medio);

    return this._http.post(this.url + 'medio/create', params, {headers : headers});
  }

  editMedio(medio: MedioContacto): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(medio);

    return this._http.put(this.url + 'medio/update', params, {headers : headers});
  }

  deleteMedio(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `medio/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listMedio(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'medio/list?empresa=1', {headers: headers});
  }

 readMedio(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `medio/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}
