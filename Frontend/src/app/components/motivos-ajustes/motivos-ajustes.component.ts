import { Component, OnInit, ViewChild } from '@angular/core';
import { MotivoAjusteDTO } from "src/app/models/MotivoAjusteDTO.model";
import { MotivoAjusteService } from "src/app/services/motivo-ajuste.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-motivos-ajustes',
  templateUrl: './motivos-ajustes.component.html',
  styleUrls: ['./motivos-ajustes.component.scss'],
  providers: [MotivoAjusteService]
})
export class MotivosAjustesComponent implements OnInit {
  
  @ViewChild('formAddMotAjuste') formValuesAddMotAjuste;
  @ViewChild('formEditMotAjuste') formValuesEditMotAjuste;
  @ViewChild('formDeleteMotAjuste') formValuesDeleteMotAjuste;

  public url: String;
  public status: String;
  public busqueda: String;
  p: number = 1;
  public motAjusteModel: MotivoAjusteDTO;
  public motAjuste: MotivoAjusteDTO;
  public visualizarMotAjuste: MotivoAjusteDTO;

  constructor(public _motAjusteService: MotivoAjusteService) {
    this.motAjusteModel = new MotivoAjusteDTO("", "", "", 0, 0, "", "", "", "", "1", true);
    this.motAjuste = new MotivoAjusteDTO("", "", "", 0, 0, "", "", "", "", "1", true);
   }

  ngOnInit() {
    this.listMotAjuste();

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

  addMotAjuste(){
    this._motAjusteService.addMotAjuste(this.motAjusteModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listMotAjuste();
          this.status = 'Ok';
          this.formValuesAddMotAjuste.resetForm();
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

  editMotAjuste(){
    this.motAjusteModel.codigo = this.motAjuste.codigo
    this._motAjusteService.editMotAjuste(this.motAjusteModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listMotAjuste();
          this.status = 'Ok';
          this.formValuesEditMotAjuste.resetForm();
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

  deleteMotAjuste(){
    this._motAjusteService.deleteMotAjuste(this.motAjuste.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listMotAjuste();
          this.status = 'Ok';
          this.formValuesDeleteMotAjuste.resetForm();
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

  listMotAjuste(){
    this._motAjusteService.listMotAjuste().subscribe(
      response =>{
        console.log(response);
        this.visualizarMotAjuste = response;
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

  readMotAjuste(codigo){
    this._motAjusteService.readMotAjuste(codigo).subscribe(
      response =>{
        console.log(response);
        this.motAjuste = response;
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



}
