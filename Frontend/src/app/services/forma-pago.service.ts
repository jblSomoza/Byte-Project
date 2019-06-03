import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormaDePagoDTO } from '../models/FormaDePagoDTO.model';
import { GLOBAL } from './global.service';

@Injectable()
export class FormaPagoService {
  public url: String //recibe la variable global

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;    
  }

  addFormasPagos(formaPago: FormaDePagoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaPago);

    return this._http.post(this.url + 'formaDePago/create', params, {headers : headers});
  }

  editFormasPagos(formaPago: FormaDePagoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaPago);

    return this._http.put(this.url + 'formaDePago/update', params, {headers : headers});
  }

  deleteFormasPagos(codigo): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `formaDePago/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listFormasPagos(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'formaDePago/list?empresa=1', {headers: headers});
  }

 readFormasPagos(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `formaDePago/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }



}
