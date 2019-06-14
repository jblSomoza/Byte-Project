import { Component, OnInit, ViewChild } from '@angular/core';
import { EstatusAvaluoDTO } from "src/app/models/EstatusAvaluoDTO.model";
import { EstatusAvaluoService } from "src/app/services/estatus-avaluo.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-estatus-avaluos',
  templateUrl: './estatus-avaluos.component.html',
  styleUrls: ['./estatus-avaluos.component.scss'],
  providers: [EstatusAvaluoService]
})
export class EstatusAvaluosComponent implements OnInit {

  @ViewChild('formAddEstAvaluo') formValuesAddEstAvaluo;
  @ViewChild('formEditEstAvaluo') formValuesEditEstAvaluo;
  @ViewChild('formDeleteEstAvaluo') formValuesDeleteEstAvaluo;
  p: number = 1;
  public url: String;
  public status: String;

  public estAvaluoModel: EstatusAvaluoDTO;
  public estAvaluo: EstatusAvaluoDTO;
  public visualizarEstAvaluo: EstatusAvaluoDTO;
  public busquedaEstAvaluo: String;

  constructor(public _estAvaluoService: EstatusAvaluoService) {
    this.estAvaluoModel = new EstatusAvaluoDTO(
      0, 0, "", "", "1", true);

    this.estAvaluo = new EstatusAvaluoDTO(
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
    this.listEstAvaluo();

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

  addEstAvaluo(){
    this._estAvaluoService.addEstAvaluo(this.estAvaluoModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listEstAvaluo();
          this.status = 'Ok';
          this.formValuesAddEstAvaluo.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  editEstAvaluo(){
    this.estAvaluoModel.codigo = this.estAvaluo.codigo;
    this._estAvaluoService.editEstAvaluo(this.estAvaluoModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listEstAvaluo();
          this.status = 'Ok';
          this.formValuesEditEstAvaluo.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  deleteEstAvaluo(){
    this._estAvaluoService.deleteEstAvaluo(this.estAvaluo.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listEstAvaluo();
          this.status = 'Ok';
          this.formValuesDeleteEstAvaluo.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  listEstAvaluo(){
    this._estAvaluoService.listEstAvaluo().subscribe(
      response =>{
        console.log(response);
        this.status = 'Ok'
        this.visualizarEstAvaluo = response
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

  readEstAvaluo(codigo){
    this._estAvaluoService.readEstAvaluo(codigo).subscribe(
      response =>{
        console.log(response);
        this.status = 'Ok';
        this.estAvaluo = response;
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error'
        }
      }
    )
  }

}