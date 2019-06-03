import { Component, OnInit , ViewChild} from '@angular/core';
import { LugaresInversionDTO } from 'src/app/models/lugaresInversionDTO.model';
import { LugaresInversionService } from 'src/app/services/lugaresInversion.service';

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
