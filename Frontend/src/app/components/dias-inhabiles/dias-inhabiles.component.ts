import { Component, OnInit, ViewChild } from '@angular/core';
import { DiasNoHabilesNoCobroMoraDTO } from "src/app/models/DiasNoHabilesNoCobroMoraDTO.model";
import { DiasInhabilesService } from "src/app/services/dias-inhabiles.service";
import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-dias-inhabiles',
  templateUrl: './dias-inhabiles.component.html',
  styleUrls: ['./dias-inhabiles.component.scss'],
  providers: [DiasInhabilesService]
})
export class DiasInhabilesComponent implements OnInit {

  public fecha;
  public fechaList;
  public fechaVer;
  public fechaUpdate;

  public tipoFeriadoActualizar;

  @ViewChild('formAddDiaInhabil') formValuesAddDiaInhabil;
  @ViewChild('formEditDiaInhabil') formValuesEditDiaInhabil;
  @ViewChild('formDeleteDiaInhabil') formValuesDeleteDiaInhabil;

  public url: String;
  public status: String;
  public busqueda: String;
  public busquedaDiaInhabil: string;
  p: number = 1;



  public diasInhabilesModel: DiasNoHabilesNoCobroMoraDTO;
  public diaInhabil: DiasNoHabilesNoCobroMoraDTO;
  public visualizarDiaInhabil: DiasNoHabilesNoCobroMoraDTO;

  constructor(public _diaInhabilService: DiasInhabilesService) {
    this.diasInhabilesModel = new DiasNoHabilesNoCobroMoraDTO(0, "", "", "1", true, "", "");
    this.diaInhabil = new DiasNoHabilesNoCobroMoraDTO(0, "", "", "1", true, "", "");
  }

  ngOnInit() {
    this.listDiasInhabiles();
  }

  addDiaInhabil() {
    this.fecha = this.diasInhabilesModel.fechaFeriado;

    var fechaA = new Date(this.fecha);

    this.fecha = fechaA.toISOString();

    this.diasInhabilesModel.fechaFeriado = this.fecha

    this._diaInhabilService.addDiasInhabiles(this.diasInhabilesModel).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          console.log(this.diasInhabilesModel.fechaFeriado);
          console.log(response);
          this.listDiasInhabiles();
          this.formValuesAddDiaInhabil.resetForm()
        }

        if (response.description == "Día No Habil ya existe") {
          this.status = 'error1'
        }
        if (response.description == "DESCRIPCION NO VALIDO") {
          this.status = 'error2'
        }
        if (response.description == "Tipo Feriado No Valido") {
          this.status = 'error3'
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

  editDiaInhabil() {
    this.diasInhabilesModel.fechaFeriado = this.fechaUpdate;
    this.diasInhabilesModel.tipoFeriado = this.tipoFeriadoActualizar;
    console.log(this.fechaUpdate)
    this._diaInhabilService.editDiasInhabiles(this.diasInhabilesModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listDiasInhabiles();
          this.status = 'Ok';
          this.formValuesEditDiaInhabil.resetForm();
        }
        if (response.description == "DESCRIPCION NO VALIDO") {
          this.status = 'error2'
        }
        if (response.description == "Tipo Feriado No Valido") {
          this.status = 'error3'
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

  deleteDiaInhabil() {
    this.fechaVer = this.fechaUpdate

    console.log(this.fechaVer);

    var year = this.fechaVer[0] + this.fechaVer[1] + this.fechaVer[2] + this.fechaVer[3]
    var month = this.fechaVer[5] + this.fechaVer[6]
    var day = this.fechaVer[8] + this.fechaVer[9]

    //var year = fechaA.getFullYear();
    //var month = fechaA.getMonth();
    //var day = fechaA.getDay();

    var fecha = year + '/' + month + '/' + day

    console.log(fecha);
    this._diaInhabilService.deleteDiasInhabiles(fecha, this.tipoFeriadoActualizar).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listDiasInhabiles();
          this.status = 'Ok';
          this.formValuesDeleteDiaInhabil.resetForm();
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

  listDiasInhabiles() {
    this._diaInhabilService.listDiasInhabiles().subscribe(
      response => {
        if (response) {
          var CD = response.length

          for (var i = 0; i < CD; i++) {
            this.fechaList = response[i].fechaFeriado;

            var fechaA = new Date(this.fechaList);

            this.fechaList = fechaA.toISOString();

            response[i].fechaFeriado = this.fechaList;
          }
          this.visualizarDiaInhabil = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  readDiaInhabil(fechaFeriado, tipoFeriado) {
    this.fechaVer = fechaFeriado

    console.log(this.fechaVer);

    var year = this.fechaVer[0] + this.fechaVer[1] + this.fechaVer[2] + this.fechaVer[3]
    var month = this.fechaVer[5] + this.fechaVer[6]
    var day = this.fechaVer[8] + this.fechaVer[9]

    //var year = fechaA.getFullYear();
    //var month = fechaA.getMonth();
    //var day = fechaA.getDay();

    var fecha = year + '/' + month + '/' + day

    console.log(fecha);

    this._diaInhabilService.readDiasInhabiles(fecha, tipoFeriado).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.fechaUpdate = response.fechaFeriado
          response.fechaFeriado = fechaFeriado
          this.diaInhabil = response;
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

  setDatos(fechaFeriado, tipoFeriado) {
    this.fechaUpdate = fechaFeriado;
    this.tipoFeriadoActualizar = tipoFeriado;    
  }

}
