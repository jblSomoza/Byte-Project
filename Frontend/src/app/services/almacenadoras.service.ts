import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlmacenadorasDTO } from '../models/AlmacenadorasDTO.model';
import { GLOBAL } from './global.service';



@Injectable()
export class AlmacenadorasService {
  public url: String

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAlmacenadora(almacenadora: AlmacenadorasDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(almacenadora);

    return this._http.post(this.url + 'almacenadoras/create', params, {headers : headers});
  }

  editAlmacenadora(almacenadora: AlmacenadorasDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(almacenadora);

    return this._http.patch(this.url + 'almacenadoras/update', params, {headers : headers});
  }

  deleteAlmacenadora(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `almacenadoras/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listAlmacenadoras(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'almacenadoras/list?empresa=1', {headers: headers});
  }

 readAlmacenadora(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `almacenadoras/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}