import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgrupacionDeCreditosDTO } from '../models/agrupacionDeCreditosDTO.model';
import { GLOBAL } from './global.service';



@Injectable()
export class AgrupacionDeCreditosService {
  public url: String

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAgrupacionDeCreditos(agrupacion: AgrupacionDeCreditosDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(agrupacion);

    return this._http.post(this.url + 'tipoActivoCrediticio/create', params, {headers : headers});
  }

  editAgrupacionDeCreditos(agrupacion: AgrupacionDeCreditosDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(agrupacion);

    return this._http.patch(this.url + 'tipoActivoCrediticio/update', params, {headers : headers});
  }

  deleteAgrupacionDeCreditos(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `tipoActivoCrediticio/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listAgrupacionDeCreditos(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'tipoActivoCrediticio/list?empresa=1', {headers: headers});
  }
 readAgrupacionDeCreditos(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `tipoActivoCrediticio/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}