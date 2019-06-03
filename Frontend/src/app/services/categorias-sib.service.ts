import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CategoriaSibDTO} from '../models/CategoriaDTO.model';
import { GLOBAL } from './global.service';

@Injectable()
export class CategoriasService {
  public url: String //recibe la variable global

  constructor(public _http: HttpClient) { 
    this.url = GLOBAL.url;    
  }
  addCategorias(categoria: CategoriaSibDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(categoria);

    return this._http.post(this.url + 'categoria/create', params, {headers : headers});
  }

  editCategorias(categoria: CategoriaSibDTO): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = JSON.stringify(categoria);

    return this._http.put(this.url + 'categoria/update', params, {headers : headers});
  }

  deleteCategorias(codigo): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.delete(this.url + `categoria/delete?empresa=1&codigo=${codigo}`, {headers: headers});
  }


  lisCategorias(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + 'categoria/list?empresa=1', {headers: headers});
  }

 readCategorias(codigo: number): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url + `categoria/read?empresa=1&codigo=${codigo}`,{headers: headers});
  }



}
