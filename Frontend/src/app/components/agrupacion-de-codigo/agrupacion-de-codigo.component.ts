import { Component, OnInit,ViewChild } from '@angular/core';
import { AgrupacionDeCreditosDTO } from 'src/app/models/AgrupacionDeCreditosDTO.model';
import { AgrupacionDeCreditosService } from 'src/app/services/AgrupacionDeCreditos.service';

@Component({
  selector: 'app-agrupacion-de-codigo',
  templateUrl: './agrupacion-de-codigo.component.html',
  styleUrls: ['./agrupacion-de-codigo.component.scss'],
  providers: [AgrupacionDeCreditosService]
})
export class AgrupacionDeCodigoComponent implements OnInit {
  @ViewChild('formAddAgrupacionDeCreditos') formValuesAddAgrupacionDeCreditos;
  @ViewChild('formEditAgrupacionDeCreditos') formValuesEditAgrupacionDeCreditos;
  @ViewChild('formDeleteAgrupacionDeCreditos') formValuesDeleteAgrupacionDeCreditos;
  
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaAgrupacionCreditos: String; 
  p: number = 1;
  //Variables Almacenadora
  public agrupaciones: AgrupacionDeCreditosDTO;           //Manda los datos al modelo
  public agrupacion: AgrupacionDeCreditosDTO;
  public visualizarAgrupacion: AgrupacionDeCreditosDTO;  //Trae los datos del modelo

  constructor(public _agrupacionDeCreditosService: AgrupacionDeCreditosService) {
    this.agrupaciones = new AgrupacionDeCreditosDTO(
      0, 0, "", "", "1","", true);
    this.agrupacion = new AgrupacionDeCreditosDTO(
      0, 0, "", "", "1","", true);
  }  
  ngOnInit() {
    this.listarAgrupacionDeCreditos();
  }
  addAgrupacionDeCreditos() {
    this._agrupacionDeCreditosService.addAgrupacionDeCreditos(this.agrupaciones).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarAgrupacionDeCreditos();//Para refrescar
          console.log(response);
          this.formValuesAddAgrupacionDeCreditos.resetForm();//Para limpiar
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

  editAgrupacionDeCreditos() {
    this.agrupaciones.codigo = this.agrupacion.codigo;
    this._agrupacionDeCreditosService.editAgrupacionDeCreditos(this.agrupaciones).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarAgrupacionDeCreditos();
          this.status = 'Ok'
          this.formValuesEditAgrupacionDeCreditos.resetForm();
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

  deleteAgrupacionDeCreditos(){
    this._agrupacionDeCreditosService.deleteAgrupacionDeCreditos( this.agrupacion.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarAgrupacionDeCreditos();
          this.status = 'Ok'
          this.formValuesDeleteAgrupacionDeCreditos.resetForm();
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

  listarAgrupacionDeCreditos() {
    this._agrupacionDeCreditosService.listAgrupacionDeCreditos().subscribe(
      response => {
        console.log(response)
        this.visualizarAgrupacion = response;
      }
    )
  }

  readAgrupacionDeCreditos(codigo) {
    this._agrupacionDeCreditosService.readAgrupacionDeCreditos(codigo).subscribe(
      response => {
        console.log(response)
        this.agrupacion = response;
      }
    )
  }
}
