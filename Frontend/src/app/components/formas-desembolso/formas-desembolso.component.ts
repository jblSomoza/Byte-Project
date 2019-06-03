import { Component, OnInit, ViewChild } from '@angular/core';
import { FormaDesembolsoDTO } from 'src/app/models/FormaDesembolsoDTO.model';
import { FormasDesembolsoService } from 'src/app/services/FormasDesembolso.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-formas-desembolso',
  templateUrl: './formas-desembolso.component.html',
  styleUrls: ['./formas-desembolso.component.scss'],
  providers: [FormasDesembolsoService]
})
export class FormasDesembolsoComponent implements OnInit {
  @ViewChild('formAddFormasDesembolso') formValuesAddFormasDesembolso;
  @ViewChild('formEditFormasDesembolso') formValuesEditFormasDesembolso;
  @ViewChild('formDeleteFormasDesembolso') formValuesDeleteFormasDesembolso;

  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaForma: String; 
  p: number = 1;

  //Variables Almacenadora
  public formaDesembolsos: FormaDesembolsoDTO;           //Manda los datos al modelo
  public formaDesembolso: FormaDesembolsoDTO;
  public visualizarFormaDesembolso: FormaDesembolsoDTO;  //Trae los datos del modelo

  constructor(public _formasDesembolsoService: FormasDesembolsoService) {
    this.formaDesembolsos = new FormaDesembolsoDTO(
      0, 0, "", "", true);
    this.formaDesembolso = new FormaDesembolsoDTO(
      0, 0, "", "", true);
  }


  ngOnInit() {
    this.listarFormasDesembolso();
  }

  addFormasDesembolso() {
    this._formasDesembolsoService.addFormasDesembolso(this.formaDesembolsos).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarFormasDesembolso();//Para refrescar
          console.log(response);
          this.formValuesAddFormasDesembolso.resetForm();//Para limpiar
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

  editFormasDesembolso() {
    this.formaDesembolsos.codigo = this.formaDesembolso.codigo;
    this._formasDesembolsoService.editFormasDesembolso(this.formaDesembolsos).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarFormasDesembolso();
          this.status = 'Ok'
          this.formValuesEditFormasDesembolso.resetForm();
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

  deleteFormasDesembolso(){
    this._formasDesembolsoService.deleteFormasDesembolso( this.formaDesembolso.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarFormasDesembolso();
          this.status = 'Ok'
          this.formValuesDeleteFormasDesembolso.resetForm();
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

  listarFormasDesembolso() {
    this._formasDesembolsoService.listFormasDesembolso().subscribe(
      response => {
        console.log(response)
        this.visualizarFormaDesembolso = response;
      }
    )
  }

  readFormasDesembolso(codigo) {
    this._formasDesembolsoService.readFormasDesembolso(codigo).subscribe(
      response => {
        console.log(response)
        this.formaDesembolso = response;
      }
    )
  }
}

