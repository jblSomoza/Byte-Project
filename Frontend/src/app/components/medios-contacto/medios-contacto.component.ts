import { Component, OnInit,ViewChild } from '@angular/core';
import { MedioService } from 'src/app/services/medio.service';
import { MedioContacto } from 'src/app/models/medio.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-medios-contacto',
  templateUrl: './medios-contacto.component.html',
  styleUrls: ['./medios-contacto.component.scss'],
  providers:[MedioService]
})
export class MediosContactoComponent implements OnInit {


  @ViewChild('formAddMedio') formValuesAddMedio;
  @ViewChild('formEditMedio') formValuesEditMedio;
  @ViewChild('formDeleteMedio') formValuesDeleteMedio;
  
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaMedio: String; 
  p: number = 1;

  public medios: MedioContacto;           //Manda los datos al modelo
  public medio: MedioContacto;
  public visualizarMedio: MedioContacto;

  constructor(
    private _medioService: MedioService
  ) {
    this.medios = new MedioContacto(0,'','1');
    this.medio = new MedioContacto(0,'','1');
   }

  ngOnInit() {
    this.listarMedio();
    
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

  addMedio() {
    this._medioService.addMedio(this.medios).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarMedio();//Para refrescar
          console.log(response);
          this.formValuesEditMedio.resetForm();
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

  editMedio() {
    this.medios.codigo = this.medio.codigo;
    this._medioService.editMedio(this.medios).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarMedio();
          this.status = 'Ok'
          this.formValuesEditMedio.resetForm();
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

  deleteMedio(){
    this._medioService.deleteMedio( this.medio.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarMedio();
          this.status = 'Ok'
          this.formValuesDeleteMedio.resetForm();
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

  listarMedio() {
    this._medioService.listMedio().subscribe(
      response => {
        console.log(response)
        this.visualizarMedio = response;
      }
    )
  }

  readMedio(codigo) {
    this._medioService.readMedio(codigo).subscribe(
      response => {
        console.log(response)
        this.medio = response;
      }
    )
  }

}
