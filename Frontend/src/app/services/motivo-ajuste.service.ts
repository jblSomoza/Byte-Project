import { Injectable } from '@angular/core';
import { Observable } from "rxjs/";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MotivoAjusteDTO } from "src/app/models/MotivoAjusteDTO.model";
import { GLOBAL } from "./global.service";

@Injectable()
export class MotivoAjusteService {
  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

  addMotAjuste(motAjuste: MotivoAjusteDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motAjuste);

    return this._http.post(this.url + 'motivoAjuste/create', params, {headers:headers});
  }

  editMotAjuste(motAjuste: MotivoAjusteDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(motAjuste);

    return this._http.put(this.url + 'motivoAjuste/update', params, {headers:headers});
  }

  deleteMotAjuste(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `motivoAjuste/delete?empresa=1&codigo=${codigo}`, {headers:headers});
  }

  listMotAjuste(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'motivoAjuste/list?empresa=1', {headers:headers});
  }

  readMotAjuste(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `motivoAjuste/read?empresa=1&codigo=${codigo}`, {headers:headers});
  }
}
