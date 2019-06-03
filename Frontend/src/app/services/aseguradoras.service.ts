import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AseguradorasDTO } from '../models/AseguradorasDTO.model';
import { GLOBAL } from './global.service';



@Injectable()
export class AseguradorasService {
  public url: String

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAseguradora(aseguradora: AseguradorasDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);

    return this._http.post(this.url + 'aseguradora/create', params, {headers : headers});
  }

  editAseguradora(aseguradora: AseguradorasDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(aseguradora);

    return this._http.patch(this.url + 'aseguradora/update', params, {headers : headers});
  }

  deleteAseguradora(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `aseguradora/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listAseguradoras(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'aseguradora/list?empresa=1', {headers: headers});
  }

 readAseguradora(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `aseguradora/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}