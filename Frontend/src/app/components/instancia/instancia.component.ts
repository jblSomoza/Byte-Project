import { Component, OnInit, ViewChild } from '@angular/core';
import { InstanciasDTO } from 'src/app/models/InstanciasDTO.model';
import { InstanciaService } from 'src/app/services/instancia.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-instancia',
  templateUrl: './instancia.component.html',
  styleUrls: ['./instancia.component.scss'],
  providers: [InstanciaService]
})
export class InstanciaComponent implements OnInit {

  @ViewChild('formAddInstancia') formAddInstancia;
  @ViewChild('formEditInstancia') formEditInstancia;
  @ViewChild('formDeleteInstancia') formDeleteInstancia;

  public url: String;
  public status: String;
  public busquedaInstancia: String; 
  p: number = 1;

  public instanciasModel: InstanciasDTO;
  public instancia: InstanciasDTO;
  public visualizarInstancia: InstanciasDTO;

  constructor(public _instanciaService: InstanciaService) {
    this.instanciasModel = new InstanciasDTO(0, "", "", "", "", "1", true);
    this.instancia = new InstanciasDTO(0, "", "", "", "", "1", true);
  }

  ngOnInit() {
    this.listInstancia();
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

  addInstancia(){
    this.instanciasModel.codigoInstancia = this.instanciasModel.codigo
    this._instanciaService.addInstancia(this.instanciasModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listInstancia();
          this.status = 'Ok';
          this.formAddInstancia.resetForm();
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

  editInstancia(){
    this.instancia.codigo = this.instancia.codigoInstancia;
    this._instanciaService.editInstancia(this.instancia).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listInstancia();
          this.status = 'OK';
          this.formEditInstancia.resetForm();
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

  deleteInstancia(){

    this._instanciaService.deleteInstancia(this.instancia.codigoInstancia).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listInstancia();
          this.status = 'Ok';
          this.formDeleteInstancia.resetForm();
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

  listInstancia(){
    this._instanciaService.listInstancia().subscribe(
      response =>{
        console.log(response);
        this.visualizarInstancia = response;
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

  readInstancia(codigo){
    this._instanciaService.readInstancia(codigo).subscribe(
      response =>{
        console.log(response);
        this.instancia = response;
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
