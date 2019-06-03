import { Component, OnInit, ViewChild } from '@angular/core';
import { EstatusAvaluoDTO } from "src/app/models/EstatusAvaluoDTO.model";
import { EstatusAvaluoService } from "src/app/services/estatus-avaluo.service";

@Component({
  selector: 'app-estatus-avaluos',
  templateUrl: './estatus-avaluos.component.html',
  styleUrls: ['./estatus-avaluos.component.scss'],
  providers: [EstatusAvaluoService]
})
export class EstatusAvaluosComponent implements OnInit {

  @ViewChild('formAddEstAvaluo') formValuesAddEstAvaluo;
  @ViewChild('formEditEstAvaluo') formValuesEditEstAvaluo;
  @ViewChild('formDeleteEstAvaluo') formValuesDeleteEstAvaluo;

  public url: String;
  public status: String;

  public estAvaluoModel: EstatusAvaluoDTO;
  public estAvaluo: EstatusAvaluoDTO;
  public visualizarEstAvaluo: EstatusAvaluoDTO;
  public busquedaEstAvaluo: String;

  constructor(public _estAvaluoService: EstatusAvaluoService) {
    this.estAvaluoModel = new EstatusAvaluoDTO(
      0, 0, "", "", "1", true);

    this.estAvaluo = new EstatusAvaluoDTO(
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
    this.listEstAvaluo();
  }

  addEstAvaluo(){
    this._estAvaluoService.addEstAvaluo(this.estAvaluoModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listEstAvaluo();
          this.status = 'Ok';
          this.formValuesAddEstAvaluo.resetForm();
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

  editEstAvaluo(){
    this.estAvaluoModel.codigo = this.estAvaluo.codigo;
    this._estAvaluoService.editEstAvaluo(this.estAvaluoModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listEstAvaluo();
          this.status = 'Ok';
          this.formValuesEditEstAvaluo.resetForm();
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

  deleteEstAvaluo(){
    this._estAvaluoService.deleteEstAvaluo(this.estAvaluo.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listEstAvaluo();
          this.status = 'Ok';
          this.formValuesDeleteEstAvaluo.resetForm();
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

  listEstAvaluo(){
    this._estAvaluoService.listEstAvaluo().subscribe(
      response =>{
        console.log(response);
        this.status = 'Ok'
        this.visualizarEstAvaluo = response
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

  readEstAvaluo(codigo){
    this._estAvaluoService.readEstAvaluo(codigo).subscribe(
      response =>{
        console.log(response);
        this.status = 'Ok';
        this.estAvaluo = response;
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