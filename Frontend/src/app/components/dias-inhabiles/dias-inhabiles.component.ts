import { Component, OnInit, ViewChild } from '@angular/core';
import { DiasNoHabilesNoCobroMoraDTO } from "src/app/models/DiasNoHabilesNoCobroMoraDTO.model";
import { DiasInhabilesService } from "src/app/services/dias-inhabiles.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-dias-inhabiles',
  templateUrl: './dias-inhabiles.component.html',
  styleUrls: ['./dias-inhabiles.component.scss'],
  providers: [DiasInhabilesService]
})
export class DiasInhabilesComponent implements OnInit {  

  @ViewChild('formAddDiaInhabil') formValuesAddDiaInhabil;
  @ViewChild('formEditDiaInhabil') formValuesEditDiaInhabil;
  @ViewChild('formDeleteDiaInhabil') formValuesDeleteDiaInhabil;

  public url: String;
  public status: String;
  public busqueda: String; 
  public busquedaDestino : string;
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

  addDiaInhabil(){
    this._diaInhabilService.addDiasInhabiles(this.diasInhabilesModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listDiasInhabiles();
          this.status = 'Ok';
          this.formValuesAddDiaInhabil.resetForm();          
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

  editDiaInhabil(){
    this.diasInhabilesModel.fechaFeriado = this.diaInhabil.fechaFeriado;
    this.diasInhabilesModel.tipoFeriado = this.diaInhabil.tipoFeriado;
    this._diaInhabilService.editDiasInhabiles(this.diasInhabilesModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listDiasInhabiles();
          this.status = 'Ok';
          this.formValuesEditDiaInhabil.resetForm();
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

  deleteDiaInhabil(){
    var fechaFeriado = this.diaInhabil.fechaFeriado;
    var tipoFeriado = this.diaInhabil.tipoFeriado;
    this._diaInhabilService.deleteDiasInhabiles(fechaFeriado, tipoFeriado).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listDiasInhabiles();
          this.status = 'Ok';
          this.formValuesDeleteDiaInhabil.resetForm();
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

  listDiasInhabiles(){
    this._diaInhabilService.listDiasInhabiles().subscribe(
      response =>{
        console.log(response);
        this.visualizarDiaInhabil = response;
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

  readDiaInhabil(fechaFeriado: string, tipoFeriado: string){
    this._diaInhabilService.readDiasInhabiles(fechaFeriado, tipoFeriado).subscribe(
      response =>{
        console.log(response);
        this.diaInhabil = response;
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