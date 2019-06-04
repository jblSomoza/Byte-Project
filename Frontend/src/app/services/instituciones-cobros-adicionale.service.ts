import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { InstitucionesCobrosAdicionales } from '../models/institucionesCobrosAdicionales.model';

import { GLOBAL } from './global.service';

@Injectable()
export class InstitucionesCobrosAdicionalesService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  } 
  readInstitucionCobroAdicional(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `institucionCobroAdicional/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

  listInstitucionesCobrosAdicionales(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'institucionCobroAdicional/list?empresa=1', {headers:headers});
  }

  addInstitucionesCobrosAdicionales(institucionesCobrosAdicional: InstitucionesCobrosAdicionales): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(institucionesCobrosAdicional);

    return this._http.post(this.url + 'institucionCobroAdicional/create', params, {headers:headers});
  }

  editInstitucionesCobrosAdicionales(institucionesCobrosAdicional: InstitucionesCobrosAdicionales): Observable<any>{
    let params = JSON.stringify(institucionesCobrosAdicional);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + 'institucionCobroAdicional/update', params, {headers: headers})

  }
  
  deleteInstitucionesCobrosAdicionales(codigo):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `institucionCobroAdicional/delete?empresa=1&codigo=${codigo}`,{headers: headers})

  }

}
