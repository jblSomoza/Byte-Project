import { Injectable } from '@angular/core';
import { Observable } from "rxjs/";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InstanciasDTO } from "../models/InstanciasDTO.model";
import { GLOBAL } from "./global.service";

@Injectable()
export class InstanciaService {

  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addInstancia(instancia: InstanciasDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(instancia);

    return this._http.post(this.url + 'instancias/create', params, {headers:headers});
  }

  editInstancia(instancia: InstanciasDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(instancia);

    return this._http.patch(this.url + 'instancias/update', params, {headers:headers});
  }

  deleteInstancia(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `instancias/delete?empresa=1&codigo=${codigo}`, {headers:headers})
  }

  listInstancia(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'instancias/list?empresa=1', {headers:headers});
  }

  readInstancia(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `instancias/read?empresa=1&codigo=${codigo}`, {headers:headers});
  }
}
