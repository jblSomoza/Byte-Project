import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrigenFondosDTO } from '../models/OrigenFondosDTO';
import { GLOBAL } from './global.service';

@Injectable()
export class  OrigenFondoService {
    public url: String //Recibe la variable global
     

      constructor(public _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    addOrigenFondos(origenFondo: OrigenFondosDTO): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      let params = JSON.stringify(origenFondo);
  
      return this._http.post(this.url + 'origenDeFondosService/create', params, {headers : headers});
    }
  
    editOrigenFondos(OrigenFondo: OrigenFondosDTO): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      let params = JSON.stringify(OrigenFondo);
  
      return this._http.put(this.url + 'origenDeFondosService/update', params, {headers : headers});
    }
  
    deleteOrigenFondos(codigo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return this._http.delete(this.url + `origenDeFondosService/delete?empresa=1&codigo=${codigo}`, {headers: headers});
    }
  
  
    listOrigenFondos(): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return this._http.get(this.url + 'origenDeFondosService/list?empresa=1', {headers: headers});
    }
  
   readOrigenFondos(codigo: number): Observable<any>{
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return this._http.get(this.url + `origenDeFondosService/read?empresa=1&codigo=${codigo}`,{headers: headers});
    }
  
  
  
  }
  