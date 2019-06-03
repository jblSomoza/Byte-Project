import { Injectable } from '@angular/core';
import { Observable } from "rxjs/";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EstatusAvaluoDTO } from "../models/EstatusAvaluoDTO.model";
import { GLOBAL } from "./global.service";

@Injectable()
export class EstatusAvaluoService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addEstAvaluo(estAvaluo: EstatusAvaluoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(estAvaluo);

    return this._http.post(this.url + 'estatusAvaluo/create', params, {headers:headers});
  }

  editEstAvaluo(estAvaluo: EstatusAvaluoDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(estAvaluo);

    return this._http.put(this.url + 'estatusAvaluo/update', params, {headers:headers});
  }

  deleteEstAvaluo(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `estatusAvaluo/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }

  listEstAvaluo(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'estatusAvaluo/list?empresa=1', {headers:headers});
  }

  readEstAvaluo(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `estatusAvaluo/read?empresa=1&codigo=${codigo}`, {headers:headers});
  }
}
