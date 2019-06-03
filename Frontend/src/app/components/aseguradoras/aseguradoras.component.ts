import { Component, OnInit ,ViewChild } from '@angular/core';
import { AseguradorasDTO } from 'src/app/models/AseguradorasDTO.model';
import { AseguradorasService } from 'src/app/services/aseguradoras.service';

@Component({
  selector: 'app-aseguradoras',
  templateUrl: './aseguradoras.component.html',
  styleUrls: ['./aseguradoras.component.scss'],
  providers: [AseguradorasService]
})
export class AseguradorasComponent implements OnInit {
  
  @ViewChild('formAddAseguradora') formValuesAddAseguradora;
  @ViewChild('formEditAseguradora') formValuesEditAseguradora;
  @ViewChild('formDeleteAseguradora') formValuesDeleteAseguradora;

  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaAseguradora: String; 
  p: number = 1;
  //Variables Almacenadora
  public aseguradoras: AseguradorasDTO;           //Manda los datos al modelo
  public aseguradora: AseguradorasDTO;
  public visualizarAseguradora: AseguradorasDTO;  //Trae los datos del modelo

  constructor(public _aseguradorasService: AseguradorasService) {
    this.aseguradoras = new AseguradorasDTO(
      0, 0, "", "", "1", true);
    this.aseguradora = new AseguradorasDTO(
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
    this.listarAseguradoras();
  }
  addAseguradora() {
    this._aseguradorasService.addAseguradora(this.aseguradoras).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listarAseguradoras();//Para refrescar
          console.log(response);
          this.formValuesAddAseguradora.resetForm();//Para limpiar
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

  editAseguradora() {
    this.aseguradoras.codigo = this.aseguradora.codigo;
    this._aseguradorasService.editAseguradora(this.aseguradoras).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listarAseguradoras();
          this.status = 'Ok'
          this.formValuesEditAseguradora.resetForm();
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

  deleteAseguradora(){
    this._aseguradorasService.deleteAseguradora( this.aseguradora.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listarAseguradoras();
          this.status = 'Ok'
          this.formValuesDeleteAseguradora.resetForm();
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

  listarAseguradoras() {
    this._aseguradorasService.listAseguradoras().subscribe(
      response => {
        console.log(response)
        this.visualizarAseguradora = response;
      }
    )
  }

  readAseguradora(codigo) {
    this._aseguradorasService.readAseguradora(codigo).subscribe(
      response => {
        console.log(response)
        this.aseguradora = response;
      }
    )
  }

}
