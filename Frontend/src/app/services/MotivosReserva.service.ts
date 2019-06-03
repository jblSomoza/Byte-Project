import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MotivosReservaDTO } from '../models/MotivosReservaDTO.model';
import { GLOBAL } from './global.service';

@Injectable()
export class MotivosReservaDTOService {
  public url: String

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addMotivosReserva(motivosReserva: MotivosReservaDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivosReserva);

    return this._http.post(this.url + 'motivoReversionPago/create', params, {headers : headers});
  }
  getRecargosAdicionales() : Observable<any>{ //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'cobroAdicional/list?empresa=1', {headers : headers});
  }

  getInstituciones(): Observable<any> { //lista
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'institucionCobroAdicional/list?empresa=1', { headers: headers });
  }
  editMotivosReserva(motivosReserva: MotivosReservaDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motivosReserva);

    return this._http.patch(this.url + 'motivoReversionPago/update', params, {headers : headers});
  }

  deleteMotivosReserva(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `motivoReversionPago/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }
  listMotivosReserva(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'motivoReversionPago/list?empresa=1', {headers: headers});
  }

  readMotivosReserva(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `motivoReversionPago/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }

}