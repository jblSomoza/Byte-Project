import { Injectable } from '@angular/core';
import { Observable } from "rxjs/";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AbogadosNotariosDTO } from "../models/AbogadosNotariosDTO.mode";
import { GLOBAL } from "./global.service";

@Injectable()
export class NotariosService {
  public url: String;

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;
  }

  addNotarios(notario: AbogadosNotariosDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(notario);

    return this._http.post(this.url + 'abogadosNotarios/create', params, {headers:headers});
  }

  editNotarios(notario: AbogadosNotariosDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(notario);

    return this._http.put(this.url + 'abogadosNotarios/update', params, {headers:headers});
  }

  deleteNotarios(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `abogadosNotarios/delete?empresa=1&codigo=${codigo}`, {headers:headers});
  }

  listNotarios(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'abogadosNotarios/list?empresa=1', {headers:headers});
  }

  readNotarios(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `abogadosNotarios/read?empresa=1&codigo=${codigo}`, {headers:headers});
  }
}
