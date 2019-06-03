import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatusGarantiaRealDTO } from '../models/StatusGarantiaRealDTO.model';
import { GLOBAL } from './global.service';


@Injectable()
export class StatusGarantiaRealesService {
  public url: String //recibe la variable global

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;    
  }
  addStatusGarantiaReales(formaPago: StatusGarantiaRealDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaPago);

    return this._http.post(this.url + 'statusGarantiaReal/create', params, {headers : headers});
  }

  editStatusGarantiaReales(formaPago: StatusGarantiaRealDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(formaPago);

    return this._http.put(this.url + 'statusGarantiaReal/update', params, {headers : headers});
  }

  deleteStatusGarantiaReales(codigo): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `statusGarantiaReal/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  listStatusGarantiaReales(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'statusGarantiaReal/list', {headers: headers});
  }

 readStatusGarantiaReales(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `statusGarantiaReal/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }
}
