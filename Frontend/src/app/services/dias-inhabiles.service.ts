import { Injectable } from '@angular/core';
import { Observable } from "rxjs/";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DiasNoHabilesNoCobroMoraDTO } from "../models/DiasNoHabilesNoCobroMoraDTO.model";
import { GLOBAL } from "./global.service";

@Injectable()
export class DiasInhabilesService {
  public url: String;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addDiasInhabiles(diasInhabile: DiasNoHabilesNoCobroMoraDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(diasInhabile);

    return this._http.post(this.url + 'diasNoHabilesNoCobroMora/create', params, {headers:headers});
  }

  editDiasInhabiles(diasInhabile: DiasNoHabilesNoCobroMoraDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(diasInhabile);

    return this._http.put(this.url + 'diasNoHabilesNoCobroMora/update', params, {headers:headers});
  }

  deleteDiasInhabiles(fechaFeriado: string, tipoFeriado: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `diasNoHabilesNoCobroMora/delete?empresa=1&fechaFeriado=${fechaFeriado}&tipoFeriado=${tipoFeriado}`, {headers:headers});
  }

  listDiasInhabiles(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'diasNoHabilesNoCobroMora/list?empresa=1', {headers:headers});
  }

  readDiasInhabiles(fechaFeriado: string, tipoFeriado: string): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `diasNoHabilesNoCobroMora/read?empresa=1&fechaFeriado=${fechaFeriado}&tipoFeriado=${tipoFeriado}`, {headers:headers});
  }
}
