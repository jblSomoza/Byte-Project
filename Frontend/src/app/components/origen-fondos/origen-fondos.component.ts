import { OrigenFondosService } from 'src/app/services/origen-fondos.service';
import { GLOBAL } from 'src/app/services/global.service';
import{OrigenDeFondosDTO} from 'src/app/models/OrigenDeFondosDTO'

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-origen-fondos',
  templateUrl: './origen-fondos.component.html',
  styleUrls: ['./origen-fondos.component.scss'],
  providers: [OrigenFondosService] //Servicios 

})
export class OrigenFondosComponent implements OnInit {

  @ViewChild('formAddOrigenesFondos') formValuesAddOrigenesFondos;
  public url; //
  public status: string;
  public OrigenFondoModel:OrigenDeFondosDTO;//Para agregar los datos al modelo. (Enviar los datos)
  public OrigenFondo:OrigenDeFondosDTO; //Para listar los datos. (Se traen los datos)

  constructor( 
    private _origenesFondosService : OrigenFondosService
  ) { 
    this.url = GLOBAL.url
    this.OrigenFondo = new OrigenDeFondosDTO(
      "",0,0,0,"","",0,"",true,0,""
    )
  }


  ngOnInit() {
  } //llame a un metodo determinado cuando inicie la app, asi no esperar un metodo x

  addOrigenFondo(){          /* El del servicion */
    this._origenesFondosService.addOrigenFondos(this.OrigenFondoModel).subscribe(
      response => {
        if(response){
          console.log(response);
            this.formValuesAddOrigenesFondos.resetForm();
            this.status = "ok"
        }   
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'Error'
           }
        }
    )

  }
}
