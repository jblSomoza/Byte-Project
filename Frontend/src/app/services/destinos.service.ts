import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestinoDTO } from '../models/DestinoDTO';
import { GLOBAL } from './global.service';

@Injectable()
export class DestinosService {
  public url: String //recibe la variable global

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;    
  }
  addDestinos(destino: DestinoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(destino);

    return this._http.post(this.url + 'destino/create?empresa=1', params, {headers : headers});
  }

  editDestinos(destino: DestinoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(destino);

    return this._http.put(this.url + 'destino/update', params, {headers : headers});
  }

  deleteDestinos(codigo): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `destino/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listDestinos(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'destino/list?empresa=1', {headers: headers});
  }

 readDestinos(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `destino/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}