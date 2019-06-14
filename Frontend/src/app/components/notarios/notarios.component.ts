import { Component, OnInit, ViewChild } from '@angular/core';
import { AbogadosNotariosDTO } from "src/app/models/AbogadosNotariosDTO.mode";
import { NotariosService } from "src/app/services/notarios.service";
// import { $ } from 'protractor';
import * as $ from 'jquery';

@Component({
  selector: 'app-notarios',
  templateUrl: './notarios.component.html',
  styleUrls: ['./notarios.component.scss'],
  providers: [NotariosService]
})
export class NotariosComponent implements OnInit {
  @ViewChild('formAddNotario') formValuesAddNotario;
  @ViewChild('formEditNotario') formValuesEditNotario;
  @ViewChild('formDeleteNotario') formValuesDeleteNotario;
  @ViewChild('formViewNotario') formValuesViewNotario

  public url: String;
  public status: String;
  public busquedaNotario: String
  p: number = 1;
  public notariosModel: AbogadosNotariosDTO;
  public notario: AbogadosNotariosDTO;
  public visualizarNotario: AbogadosNotariosDTO;

  constructor(public _notariosService: NotariosService) {
    this.notariosModel = new AbogadosNotariosDTO(
      "", 0, 0, "", "", "", "", "", "1", true, "", "", "", "", 0, "", 0);
    this.notario = new AbogadosNotariosDTO(
      "", 0, 0, "", "", "", "", "", "1", true, "", "", "", "", 0, "", 0);
  }

  ngOnInit() {
    this.listNotarios();
    /* ALERTA AGREGAR */
    $(document).ready(function () {
      $('#guardado').click(function () {
          $('#alertaAdd').show('fade');
          setTimeout(function () {
              $('#alertaAdd').hide('fade');
          }, 2000);
      });
      $('#linkClose').click(function () {
          $('#alertaAdd').hide('fade');
      });
    });

    /* ALERTA EDITAR */
    $(document).ready(function () {
      $('#editado').click(function () {
          $('#alertaEdit').show('fade');
          setTimeout(function () {
              $('#alertaEdit').hide('fade');
          }, 2000);
      });
      $('#linkClose').click(function () {
          $('#alertaEdit').hide('fade');
      });
    });
  
        /* ALERTA ELIMINAR */
    $(document).ready(function () {
      $('#eliminado').click(function () {
          $('#alertaDelete').show('fade');
          setTimeout(function () {
              $('#alertaDelete').hide('fade');
          }, 2000);
      });
      $('#linkClose').click(function () {
          $('#alertaDelete').hide('fade');
      });
    });
  }

  addNotarios(){
    this._notariosService.addNotarios(this.notariosModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listNotarios();
          this.status = 'Ok';
          this.formValuesAddNotario.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  editNotario(){
    this.notariosModel.codigo = this.notario.codigo;
    this._notariosService.editNotarios(this.notariosModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listNotarios();
          this.status = 'Ok';
          this.formValuesEditNotario.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  deleteNotario(){
    this._notariosService.deleteNotarios(this.notario.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listNotarios();
          this.status = 'Ok';
          this.formValuesDeleteNotario.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error';
        }
      }
    )
  }

  listNotarios(){
    this._notariosService.listNotarios().subscribe(
      response =>{
        console.log(response);
        this.visualizarNotario = response
      },
      error =>{
        var errorMessage = <any>error
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  readNotario(codigo){
    this._notariosService.readNotarios(codigo).subscribe(
      response =>{
        console.log(response);
        this.notario = response;
      },
      error =>{
        var errorMessage = <any>error
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }  
}
