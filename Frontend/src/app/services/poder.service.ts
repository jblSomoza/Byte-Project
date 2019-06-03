import { Injectable } from '@angular/core';
import { Observable } from "rxjs/";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PoderDTO } from "../models/PoderDTO.model";
import { GLOBAL } from "./global.service"

@Injectable()
export class PoderService {
  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addPoder(poder: PoderDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(poder);

    return this._http.post(this.url + 'poder/create', params, {headers:headers});
  }

  editPoder(poder: PoderDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(poder);

    return this._http.put(this.url + 'poder/update', params, {headers:headers});
  }

  deletePoder(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `poder/delete?empresa=1&codigo=${codigo}`, {headers:headers});
  }

  listPoder(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'poder/list?empresa=1', {headers:headers});
  }

  readPoder(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application');
    
    return this._http.get(this.url + `poder/read?empresa=1&codigo=${codigo}`, {headers:headers});
  }
}
