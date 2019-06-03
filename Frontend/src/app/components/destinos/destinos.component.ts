import { Component, OnInit, ViewChild } from '@angular/core';
import { DestinoDTO } from 'src/app/models/DestinoDTO';
import { DestinosService } from 'src/app/services/destinos.service';

@Component({ 
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss'],
  providers: [DestinosService]

})
export class DestinosComponent implements OnInit {

  @ViewChild('formAddDestino') formValuesAddDestino;
  @ViewChild('formEditDestino') formValuesEditDestino;
  @ViewChild('formDeleteDestino') formValuesDeleteDestino;
 
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaDestino : string;
  p: number = 1;
  //Variables formaDePago
  public destinoModel: DestinoDTO;// (Enviar los datos al modelo)
  public visualizarDestino: DestinoDTO; // (Se traen los datos del modelo)
  public  destinoX:DestinoDTO; /* Lo usamos en el editar/borrar/read */

  constructor(public _destinoService: DestinosService) {
    this.destinoModel = new DestinoDTO( //mostrar los datos /agregar
      0, 0, "", "", "1", true);
    this.destinoX = new DestinoDTO(//Para editar Datos
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
  
    this.listDestino()
  }

  listDestino() {   /* El del servicion */
    this._destinoService.listDestinos().subscribe(
      response => {
        console.log(response)
        this.visualizarDestino = response;
      }
    )
  }

  readDestino(codigo) {
    this._destinoService.readDestinos(codigo).subscribe(
      response => {
        console.log(response)
        this.destinoX = response;
      }
    )
  }

  addDestino() {        /* El del servicion */
    this._destinoService.addDestinos(this.destinoModel).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listDestino();//Para refrescar
          console.log(response);
          this.formValuesAddDestino.resetForm();//Para limpiar
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'Error'
        }
      }
    )
  }

  editDestino() {
    this.destinoModel.codigo = this.destinoX.codigo;
    this._destinoService.editDestinos(this.destinoX).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listDestino();
          this.status = 'Ok'
          this.formValuesEditDestino.resetForm();
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'Error'
        }
      }
    )
  }

  deleteDestino(){
    this._destinoService.deleteDestinos( this.destinoX.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listDestino();
          this.status = 'Ok'
          this.formValuesDeleteDestino.resetForm();
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
