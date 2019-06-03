import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SupervisorDTO } from '../models/SupervisorDTO.model';
import { GLOBAL } from './global.service';


@Injectable()
export class SupervisorService {
  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addSupervisor(supervisor: SupervisorDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(supervisor);

    return this._http.post(this.url + 'supervisor/create?empresa=1', params, {headers: headers});
  }

  editSupervisor(supervisor: SupervisorDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(supervisor);

    return this._http.put(this.url + 'supervisor/update', params, {headers: headers});
  }

  deleteSupervisor(codigo): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `supervisor/delete?empresa=1&codigo=${codigo}`, {headers : headers});
  }

  listSupervisor(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'supervisor/list?empresa=1', {headers: headers});
  }

  readSupervisor(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `supervisor/read?empresa=1&codigo=${codigo}`, {headers: headers});
  }
}
