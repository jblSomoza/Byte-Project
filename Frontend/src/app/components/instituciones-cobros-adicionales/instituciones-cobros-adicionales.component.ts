import { Component, OnInit,ViewChild } from '@angular/core';
import { InstitucionesCobrosAdicionales } from 'src/app/models/institucionesCobrosAdicionales.model';
import { GLOBAL } from 'src/app/services/global.service';
import { InstitucionesCobrosAdicionalesService } from 'src/app/services/instituciones-cobros-adicionale.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-instituciones-cobros-adicionales',
  templateUrl: './instituciones-cobros-adicionales.component.html',
  styleUrls: ['./instituciones-cobros-adicionales.component.scss'],
  providers: [InstitucionesCobrosAdicionalesService]
})
export class InstitucionesCobrosAdicionalesComponent implements OnInit {
  @ViewChild('formAddInstitucionesCobros') formValuesAddInstitucionesCobros;
  @ViewChild('formEditInstitucionesCobros') formValuesEditInstitucionesCobros;
  @ViewChild('formDeleteInstitucionesCobros') formValuesDeleteInstitucionesCobros;
  @ViewChild('formVisualizarInstitucionesCobrosAdicionales') formValuesVisualizarInstitucionesCobrosAdicionales;
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño

  
  public institucionesCobrosAdicionales: InstitucionesCobrosAdicionales;           //Manda los datos al modelo
  public institucionesCobrosAdicional: InstitucionesCobrosAdicionales;
  public visualizarInstitucionesCobrosAdicional: InstitucionesCobrosAdicionales;  //Trae los datos del modelo
  public busquedaInstitucionesCobrosAdicional: String; 
  p: number = 1;
  constructor(public _institucionesCobrosAdicionalesService: InstitucionesCobrosAdicionalesService) {
    this.institucionesCobrosAdicionales = new InstitucionesCobrosAdicionales(
      0, 0, "", "", "1", true);
    this.institucionesCobrosAdicional = new InstitucionesCobrosAdicionales(
      0, 0, "", "", "1", true);
  }
  ngOnInit() {
    this.listarInstitucionesCobrosAdicionales();

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
  addInstitucionesCobrosAdicionales() {
    this._institucionesCobrosAdicionalesService.addInstitucionesCobrosAdicionales(this.institucionesCobrosAdicionales).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarInstitucionesCobrosAdicionales();//Para refrescar
          console.log(response);
          this.formValuesAddInstitucionesCobros.resetForm();//Para limpiar
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

  editInstitucionesCobrosAdicionales() {
    this.institucionesCobrosAdicionales.codigo = this.institucionesCobrosAdicional.codigo;
    this._institucionesCobrosAdicionalesService.editInstitucionesCobrosAdicionales(this.institucionesCobrosAdicionales).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarInstitucionesCobrosAdicionales();
          this.status = 'Ok'
          this.formValuesEditInstitucionesCobros.resetForm();
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
  

  deleteInstitucionesCobrosAdicionales(){
    this._institucionesCobrosAdicionalesService.deleteInstitucionesCobrosAdicionales( this.institucionesCobrosAdicional.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarInstitucionesCobrosAdicionales();
          this.status = 'Ok'
          this.formValuesDeleteInstitucionesCobros.resetForm();
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

  listarInstitucionesCobrosAdicionales() {
    this._institucionesCobrosAdicionalesService.listInstitucionesCobrosAdicionales().subscribe(
      response => {
        console.log(response)
        this.visualizarInstitucionesCobrosAdicional = response;
      }
    )
  }

  readInstitucionCobroAdicional(codigo) {
    this._institucionesCobrosAdicionalesService.readInstitucionCobroAdicional(codigo).subscribe(
      response => {
        console.log(response)
        this.institucionesCobrosAdicional = response;
      }
    )
  }
}
