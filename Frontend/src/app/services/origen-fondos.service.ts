import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Observable } from 'rxjs';
import { OrigenDeFondosDTO } from '../models/OrigenDeFondosDTO';


@Injectable()
export class OrigenFondosService {
    public url: String //Recibe la variable global
     

      constructor(public _http: HttpClient) {
        this.url = GLOBAL.url;
    }

    addOrigenFondos(OrigenFondos:OrigenDeFondosDTO):Observable<any>{
      let params = JSON.stringify(OrigenFondos) 
      let headers = new HttpHeaders().set('Content-Type', 'application/json'); //

      return this._http.post(this.url+'origenDeFondosService/create', params, {headers: headers})
    }
}
