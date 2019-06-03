import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusGarantiaRealDTO } from 'src/app/models/StatusGarantiaRealDTO.model';
import { StatusGarantiaRealesService } from 'src/app/services/status-garantia-reales.service';

@Component({
  selector: 'app-estatus-garantias-reales',
  templateUrl: './estatus-garantias-reales.component.html',
  styleUrls: ['./estatus-garantias-reales.component.scss'],
  providers: [StatusGarantiaRealesService]

})
export class EstatusGarantiasRealesComponent implements OnInit {
  @ViewChild('formAddStatusGarantiaReal') formValuesAddStatusGarantiaReal;
  @ViewChild('formEditStatusGarantiaReal') formValuesEditStatusGarantiaReal;
  @ViewChild('formDeleteStatusGarantiaReal') formValuesDeleteStatusGarantiaReal;
 
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaStatusReal:string;
  p: number = 1;

  //Variables formaDePago
  public statusGarantiaRealModel: StatusGarantiaRealDTO;//Para agregar los datos al modelo. (Enviar los datos al modelo)
  public visualizarStatusGarantiaRealModel: StatusGarantiaRealDTO; //Para listar los datos del modelo. (Se traen los datos del modelo)
  public statusGarantiaRealModelX:StatusGarantiaRealDTO; /* Lo usamos en el editar/borrar/read */

  constructor(public _statusGarantiaRealeService: StatusGarantiaRealesService) {
    this.statusGarantiaRealModel = new StatusGarantiaRealDTO( //mostrar los datos /agregar
      0, 0, "", "", true);
    this.statusGarantiaRealModelX = new StatusGarantiaRealDTO(//Para editar Datos
      0, 0, "", "", true);
  }

  ngOnInit() {
  
    this.listStatusGarantiaReal()
  }

  listStatusGarantiaReal() {   /* El del servicion */
    this._statusGarantiaRealeService.listStatusGarantiaReales().subscribe(
      response => {
        console.log(response)
        this.visualizarStatusGarantiaRealModel = response;
      }
    )
  }

  readStatusGarantiaReal(codigo) {
    this._statusGarantiaRealeService.readStatusGarantiaReales(codigo).subscribe(
      response => {
        console.log(response)
        this.statusGarantiaRealModelX = response;
      }
    )
  }

  addStatusGarantiaReal() {        /* El del servicion */
    this._statusGarantiaRealeService.addStatusGarantiaReales(this.statusGarantiaRealModel).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listStatusGarantiaReal();//Para refrescar
          console.log(response);
          this.formValuesAddStatusGarantiaReal.resetForm();//Para limpiar
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

  editStatusGarantiaReal() {
    this.statusGarantiaRealModel.codigo = this.statusGarantiaRealModelX.codigo;
    this._statusGarantiaRealeService.editStatusGarantiaReales(this.statusGarantiaRealModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listStatusGarantiaReal();
          this.status = 'Ok'
          this.formValuesEditStatusGarantiaReal.resetForm();
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

  deleteStatusGarantiaReal(){
    this._statusGarantiaRealeService.deleteStatusGarantiaReales( this.statusGarantiaRealModelX.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listStatusGarantiaReal();
          this.status = 'Ok'
          this.formValuesDeleteStatusGarantiaReal.resetForm();
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
