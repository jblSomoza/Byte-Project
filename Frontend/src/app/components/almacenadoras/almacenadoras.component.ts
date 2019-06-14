import { Component, OnInit, ViewChild } from '@angular/core';
import { AlmacenadorasDTO } from 'src/app/models/AlmacenadorasDTO.model';
import { AlmacenadorasService } from 'src/app/services/almacenadoras.service';
import * as $ from 'jquery';

// import { $ } from 'protractor';

@Component({
  selector: 'app-almacenadoras',
  templateUrl: './almacenadoras.component.html',
  styleUrls: ['./almacenadoras.component.scss'],
  providers: [AlmacenadorasService]
})
export class AlmacenadorasComponent implements OnInit {

  @ViewChild('formAddAlmacenadora') formValuesAddAlmacenadora;
  @ViewChild('formEditAlmacenadora') formValuesEditAlmacenadora;
  @ViewChild('formDeleteAlmacenadora') formValuesDeleteAlmacenadora;

  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaAlmacenadora: String; 
  p: number = 1;
  
  //Variables Almacenadora
  public almacenadoras: AlmacenadorasDTO;           //Manda los datos al modelo
  public almacenadora: AlmacenadorasDTO;
  public visualizarAlmacenadora: AlmacenadorasDTO;  //Trae los datos del modelo

  constructor(public _almacenadorasService: AlmacenadorasService) {
    this.almacenadoras = new AlmacenadorasDTO(
      0, 0, "", "", "1", true);
    this.almacenadora = new AlmacenadorasDTO(
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
    this.listarAlmacenadoras();

    /* ALERTA EDITAR */
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

 

  addAlmacenadora() {
    this._almacenadorasService.addAlmacenadora(this.almacenadoras).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarAlmacenadoras();//Para refrescar
          console.log(response);
          this.formValuesAddAlmacenadora.resetForm();//Para limpiar
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

  editAlmacenadora() {
    this.almacenadoras.codigo = this.almacenadora.codigo;
    this._almacenadorasService.editAlmacenadora(this.almacenadoras).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarAlmacenadoras();
          this.status = 'Ok'
          this.formValuesEditAlmacenadora.resetForm();
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

  deleteAlmacenadora(){
    this._almacenadorasService.deleteAlmacenadora( this.almacenadora.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarAlmacenadoras();
          this.status = 'Ok'
          this.formValuesDeleteAlmacenadora.resetForm();
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

  listarAlmacenadoras() {
    this._almacenadorasService.listAlmacenadoras().subscribe(
      response => {
        console.log(response)
        this.visualizarAlmacenadora = response;
      }
    )
  }

  readAlmacenadora(codigo) {
    this._almacenadorasService.readAlmacenadora(codigo).subscribe(
      response => {
        console.log(response)
        this.almacenadora = response;
      }
    )
  }

}