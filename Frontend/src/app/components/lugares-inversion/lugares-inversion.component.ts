import { Component, OnInit , ViewChild} from '@angular/core';
import { LugaresInversionDTO } from 'src/app/models/lugaresInversionDTO.model';
import { LugaresInversionService } from 'src/app/services/lugaresInversion.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-lugares-inversion',
  templateUrl: './lugares-inversion.component.html',
  styleUrls: ['./lugares-inversion.component.scss'],
  providers: [LugaresInversionService]
})
export class LugaresInversionComponent implements OnInit {
  @ViewChild('formAddLugaresInversion') formValuesAddLugaresInversion;
  @ViewChild('formEditLugaresInversion') formValuesEditLugaresInversion;
  @ViewChild('formDeleteLugaresInversion') formValuesDeleteLugaresInversion;
  
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño

  //Variables Almacenadora
  public lugares: LugaresInversionDTO;           //Manda los datos al modelo
  public lugar: LugaresInversionDTO;
  public visualizarLugaresInversion: LugaresInversionDTO;  //Trae los datos del modelo
  public busquedaLugaresInversion: String; 
  p: number = 1;
  constructor(public _lugaresInversionService: LugaresInversionService) {
    this.lugares = new LugaresInversionDTO(
      0, 0, "", "", "1","", true);
    this.lugar = new LugaresInversionDTO(
      0, 0, "", "", "1","", true);
  }

  ngOnInit() {
    this.listarLugaresInversion();
    
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
  addLugaresInversion() {
    this._lugaresInversionService.addLugaresInversion(this.lugares).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarLugaresInversion();//Para refrescar
          console.log(response);
          this.formValuesAddLugaresInversion.resetForm();//Para limpiar
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

  editLugaresInversion() {
    this.lugares.codigo = this.lugar.codigo;
    this._lugaresInversionService.editLugaresInversion(this.lugares).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarLugaresInversion();
          this.status = 'Ok'
          this.formValuesEditLugaresInversion.resetForm();
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

  deleteLugaresInversion(){
    this._lugaresInversionService.deleteLugaresInversion( this.lugar.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarLugaresInversion();
          this.status = 'Ok'
          this.formValuesDeleteLugaresInversion.resetForm();
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

  listarLugaresInversion() {
    this._lugaresInversionService.listLugaresInversion().subscribe(
      response => {
        console.log(response)
        this.visualizarLugaresInversion = response;
      }
    )
  }

  readLugaresInversion(codigo) {
    this._lugaresInversionService.readLugaresInversion(codigo).subscribe(
      response => {
        console.log(response)
        this.lugar = response;
      }
    )
  }

}
