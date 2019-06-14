import { Component, OnInit, ViewChild } from '@angular/core';
import { PoderDTO } from 'src/app/models/PoderDTO.model';
import { PoderService } from 'src/app/services/poder.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-poder',
  templateUrl: './poder.component.html',
  styleUrls: ['./poder.component.scss'],
  providers: [PoderService]
})
export class PoderComponent implements OnInit {

  @ViewChild('formAddPoder') formValuesAddPoder;
  @ViewChild('formEditPoder') formValuesEditPoder;
  @ViewChild('formDeletePoder') formValuesDeletePoder;

  public url: String;
  public status: String;
  public busquedaPoder: String; 
  p: number = 1;

  public poderModel: PoderDTO;
  public poder: PoderDTO;
  public visualizarPoder: PoderDTO;

  constructor(public _poderService: PoderService) {
    this.poderModel = new PoderDTO(0, 0, "", "", "1", true);
    this.poder = new PoderDTO(0, 0, "", "", "1", true);
  }

  ngOnInit() {
    this.listPoder();

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

  addPoder(){
    this._poderService.addPoder(this.poderModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listPoder();
          this.status = 'Ok';
          this.formValuesAddPoder.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Ok'
        }
      }
    )
  }

  editPoder(){
    this.poderModel.codigo = this.poder.codigo;
    this._poderService.editPoder(this.poderModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listPoder();
          this.status = 'Ok';
          this.formValuesEditPoder.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Ok'
        }
      }
    )
  }

  deletePoder(){
    this._poderService.deletePoder(this.poder.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listPoder();
          this.status = 'Ok';
          this.formValuesDeletePoder.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Ok'
        }
      }
    )
  }

  listPoder(){
    this._poderService.listPoder().subscribe(
      response =>{
        console.log(response);
        this.visualizarPoder = response;
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Ok'
        }
      }
    )
  }

  readPoder(codigo){
    this._poderService.readPoder(codigo).subscribe(
      response =>{
        console.log(response);
        this.poder = response;
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Ok'
        }
      }
    )
  }

}
