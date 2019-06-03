import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormaDesembolsoDTO } from '../models/FormaDesembolsoDTO.model';
import { GLOBAL } from './global.service';



@Injectable()
export class FormasDesembolsoService {
  public url: String

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addFormasDesembolso(formaDesembolso: FormaDesembolsoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaDesembolso);

    return this._http.post(this.url + 'formaDesembolso/create', params, {headers : headers});
  }

  editFormasDesembolso(formaDesembolso: FormaDesembolsoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaDesembolso);

    return this._http.patch(this.url + 'formaDesembolso/update', params, {headers : headers});
  }

  deleteFormasDesembolso(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `formaDesembolso/delete?codigo=${codigo}`, {headers: headers});
  }
  listFormasDesembolso(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'formaDesembolso/list?', {headers: headers});
  }

 readFormasDesembolso(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `formaDesembolso/read?codigo=${codigo}`,{headers: headers});
  }

}