import { Component, OnInit, ViewChild } from '@angular/core';
import { CobrosAdicionalesDTO } from 'src/app/models/CobrosAdicionalesDTO.model';
import { CobrosAdicionalesService } from 'src/app/services/cobros-adicionales.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-cobros-adicionales',
  templateUrl: './cobros-adicionales.component.html',
  styleUrls: ['./cobros-adicionales.component.scss'],
  providers: [CobrosAdicionalesService] //Servicios 

})
export class CobrosAdicionalesComponent implements OnInit {

  @ViewChild('formAddCobroAdicional') formValuesAddCobroAdicional;
  @ViewChild('formEditCobroAdicional') formValuesEditCobroAdicional;
  @ViewChild('formDeleteCobroAdicional') formValuesDeleteCobroAdicional;
 
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaCobroAdicional: String;
  p: number = 1;
  //Variables formaDePago
  public cobroAdicionalModel: CobrosAdicionalesDTO;//Para agregar los datos al modelo. (Enviar los datos al modelo)
  public visualizarCobroAdicional: CobrosAdicionalesDTO; //Para listar los datos del modelo. (Se traen los datos del modelo)
  public cobroAdicionalX:CobrosAdicionalesDTO; /* Lo usamos en el editar/borrar/read */

  constructor(public _cobroAdicionalService: CobrosAdicionalesService) {
    this.cobroAdicionalModel = new CobrosAdicionalesDTO( //mostrar los datos /agregar
      "","","",0,"","","","","1",true,"","","","","","","","","","","","","","");
    this.cobroAdicionalX = new CobrosAdicionalesDTO(//Para editar Datos
      "","","",0,"","","","","1",true,"","","","","","","","","","","","","","");
  }

  ngOnInit() {
  
    this.listCobroAdicional()

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

  listCobroAdicional() {   /* El del servicion */
    this._cobroAdicionalService.listCobrosAdicionales().subscribe(
      response => {
        console.log(response)
        this.visualizarCobroAdicional = response;
      }
    )
  }

  readCobroAdicional(codigo) {
    this._cobroAdicionalService.readCobrosAdicionales(codigo).subscribe(
      response => {
        console.log(response)
        this.cobroAdicionalX = response;
      }
    )
  }

  addCobroAdicional() {        /* El del servicion */
    this._cobroAdicionalService.addCobrosAdicionales(this.cobroAdicionalModel).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listCobroAdicional();//Para refrescar
          console.log(response);
          this.formValuesAddCobroAdicional.resetForm();//Para limpiar
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

  editCobroAdicional() {
    this.cobroAdicionalModel.codigo = this.cobroAdicionalX.codigo;
    this._cobroAdicionalService.editCobrosAdicionales(this.cobroAdicionalModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listCobroAdicional();
          this.status = 'Ok'
          this.formValuesEditCobroAdicional.resetForm();
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

  deleteCobroAdicional(){
    this._cobroAdicionalService.deleteCobrosAdicionales( this.cobroAdicionalX.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listCobroAdicional();
          this.status = 'Ok'
          this.formValuesDeleteCobroAdicional.resetForm();
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

}
