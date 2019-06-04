import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CobrosAdicionalesDTO} from '../models/CobrosAdicionalesDTO.model';
import { GLOBAL } from './global.service';


@Injectable()
export class CobrosAdicionalesService {
  public url: String //recibe la variable global

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;    
  }

  addCobrosAdicionales(cobroAdicional: CobrosAdicionalesDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(cobroAdicional);

    return this._http.post(this.url + 'cobroAdicional//create', params, {headers : headers});
  }

  editCobrosAdicionales(cobroAdicional: CobrosAdicionalesDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(cobroAdicional);

    return this._http.put(this.url + 'cobroAdicional//update', params, {headers : headers});
  }

  deleteCobrosAdicionales(codigo): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `cobroAdicional//delete?empresa=1&codigo=${codigo}`, {headers: headers});
  } 

  listCobrosAdicionales(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'cobroAdicional//list?empresa=1', {headers: headers});
  }

 readCobrosAdicionales(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `cobroAdicional//read?empresa=1&codigo=${codigo}`,{headers: headers});
  }



}
