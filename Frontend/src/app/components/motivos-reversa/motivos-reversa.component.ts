import { Component, OnInit, ViewChild } from '@angular/core';
import { MotivosReservaDTO } from 'src/app/models/MotivosReservaDTO.model';
import { MotivosReservaDTOService } from 'src/app/services/MotivosReserva.service';
import { $ } from 'protractor';
/*import { RecargoAdicional } from '../models/recargoAdicional.model';
import { Institucion } from "../models/institucion.model";*/
@Component({
  selector: 'app-motivos-reversa',
  templateUrl: './motivos-reversa.component.html',
  styleUrls: ['./motivos-reversa.component.scss'],
  providers: [MotivosReservaDTOService]
})
export class MotivosReversaComponent implements OnInit {

  @ViewChild('formAddMotivosReserva') formValuesAddMotivosReserva;
  @ViewChild('formEditMotivosReserva') formValuesEditMotivosReserva;
  @ViewChild('formDeleteMotivosReserva') formValuesDeleteMotivosReserva;

  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaMotivosReserva: String; 
  p: number = 1;
  
  //Variables MotivosReserva
  public MotivosReservas: MotivosReservaDTO;           //Manda los datos al modelo
  public MotivosReserva: MotivosReservaDTO;
  public visualizarMotivosReserva: MotivosReservaDTO;  //Trae los datos del modelo

  constructor(public _motivosReserva: MotivosReservaDTOService) {
    this.MotivosReservas = new MotivosReservaDTO(
      "",0, 0, "", "", "1",true,0,"","","","");
    this.MotivosReserva = new MotivosReservaDTO(
      "",0, 0, "", "", "1",true,0,"","","","");
  }


  ngOnInit() {
    this.listarMotivosReserva();
  }
  addMotivosReserva() {
    this._motivosReserva.addMotivosReserva(this.MotivosReservas).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarMotivosReserva();//Para refrescar
          console.log(response);
          this.formValuesAddMotivosReserva.resetForm();//Para limpiar
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

  editMotivosReserva() {
    this.MotivosReservas.codigo = this.MotivosReserva.codigo;
    this._motivosReserva.editMotivosReserva(this.MotivosReservas).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarMotivosReserva();
          this.status = 'Ok'
          this.formValuesEditMotivosReserva.resetForm();
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

  deleteMotivosReserva(){
    this._motivosReserva.deleteMotivosReserva( this.MotivosReserva.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarMotivosReserva();
          this.status = 'Ok'
          this.formValuesDeleteMotivosReserva.resetForm();
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

  listarMotivosReserva() {
    this._motivosReserva.listMotivosReserva().subscribe(
      response => {
        if(response){
          console.log(response)
          this.visualizarMotivosReserva = response;
          this.status = 'Ok';
        }
      }
    )
  }

  readMotivosReserva(codigo) {
    this._motivosReserva.readMotivosReserva(codigo).subscribe(
      response => {
        console.log(response)
        this.MotivosReserva = response;
      }
    )
  }
}
