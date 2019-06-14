import { Component, OnInit, ViewChild } from '@angular/core';
import { FormaDePagoDTO } from 'src/app/models/FormaDePagoDTO.model';
import { FormaPagoService } from 'src/app/services/forma-pago.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.scss'],
  providers: [FormaPagoService] //Servicios 
})
export class FormaPagoComponent implements OnInit {

  @ViewChild('formAddFormaPago') formValuesAddFormaPago;
  @ViewChild('formEditFormaPago') formValuesEditFormaPago;
  @ViewChild('formDeleteFormaPago') formValuesDeleteFormaPago;
 
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaFormaPago: String;
  p: number = 1;
  //Variables formaDePago
  public formaPagoModel: FormaDePagoDTO;//Para agregar los datos al modelo. (Enviar los datos al modelo)
  public visualizarFormaPago: FormaDePagoDTO; //Para listar los datos del modelo. (Se traen los datos del modelo)
  public formaPagoX:FormaDePagoDTO; /* Lo usamos en el editar/borrar/read */

  constructor(public _formaPagoService: FormaPagoService) {
    this.formaPagoModel = new FormaDePagoDTO( //mostrar los datos /agregar
      0, 0, "", "", "1", true);
    this.formaPagoX = new FormaDePagoDTO(//Para editar Datos
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
  
    this.listarFormaPago()

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

  listarFormaPago() {   /* El del servicion */
    this._formaPagoService.listFormasPagos().subscribe(
      response => {
        console.log(response)
        this.visualizarFormaPago = response;
      }
    )
  }

  readFormaPago(codigo) {
    this._formaPagoService.readFormasPagos(codigo).subscribe(
      response => {
        console.log(response)
        this.formaPagoX = response;
      }
    )
  }

  addFormaPago() {        /* El del servicion */
    this._formaPagoService.addFormasPagos(this.formaPagoModel).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarFormaPago();//Para refrescar
          console.log(response);
          this.formValuesAddFormaPago.resetForm();//Para limpiar
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

  editFormaPago() {
    this.formaPagoModel.codigo = this.formaPagoX.codigo;
    this._formaPagoService.editFormasPagos(this.formaPagoModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarFormaPago();
          this.status = 'Ok'
          this.formValuesEditFormaPago.resetForm();
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

  deleteFormaPago(){
    this._formaPagoService.deleteFormasPagos( this.formaPagoX.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarFormaPago();
          this.status = 'Ok'
          this.formValuesDeleteFormaPago.resetForm();
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
