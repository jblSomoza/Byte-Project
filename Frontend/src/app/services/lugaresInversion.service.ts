import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LugaresInversionDTO } from '../models/LugaresInversionDTO.model';
import { GLOBAL } from './global.service';



@Injectable()
export class LugaresInversionService {
  public url: String

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addLugaresInversion(lugar: LugaresInversionDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(lugar);

    return this._http.post(this.url + 'lugar/create', params,{headers : headers} );
  }

  editLugaresInversion(lugar: LugaresInversionDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(lugar);

    return this._http.patch(this.url + 'lugar/update', params, {headers : headers});
  }

  deleteLugaresInversion(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `lugar/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listLugaresInversion(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'lugar/list?empresa=1', {headers: headers});
  }

 readLugaresInversion(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `lugar/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}