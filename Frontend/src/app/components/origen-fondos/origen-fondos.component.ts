import { Component, OnInit, ViewChild } from '@angular/core';
import { OrigenFondosDTO } from 'src/app/models/OrigenFondosDTO'
import { OrigenFondoService } from 'src/app/services/origen-fondos.service';


@Component({
  selector: 'app-origen-fondos',
  templateUrl: './origen-fondos.component.html',
  styleUrls: ['./origen-fondos.component.scss'],
  providers: [OrigenFondoService] //Servicios 

})
export class OrigenFondosComponent implements OnInit {

  @ViewChild('formAddOrigenFondo') formValuesAddOrigenFondo;
  @ViewChild('formEditOrigenFondo') formValuesEditOrigenFondo;
  @ViewChild('formDeleteOrigenFondo') formValuesDeleteOrigenFondo;


  public url; //
  public status: string;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaOrigenFondo: String;
  p: number = 1;

  //Variables OrigenDeFondos
  public origenFondoModel: OrigenFondosDTO;//Para agregar los datos al modelo. (Enviar los datos)
  public visualizarOrigenFondo: OrigenFondosDTO; //Para listar los datos del modelo. (Se traen los datos del modelos)
  public origenFondosX:OrigenFondosDTO; /* Lo usamos en el editar/borrar/read */

  constructor(
    private _origenFondoService: OrigenFondoService
  ) {
    // this.url = GLOBAL.url
    this.origenFondoModel = new OrigenFondosDTO( //mostrar los datos / agregar 
      "", 0, 0, 0, "", "", 0, "1", true, 0,"");
      this.origenFondosX = new OrigenFondosDTO(//Para editar Datos
        "", 0, 0, 0, "", "", 0, "1", true, 0, "");
  }


  ngOnInit() { //llame a un metodo determinado cuando inicie la app, asi no esperar un metodo x
    this.listOrigenFondo()

  } 

  listOrigenFondo() {      /* El del servicion */
    this._origenFondoService.listOrigenFondos().subscribe(
      response => {
        console.log(response)
        this.visualizarOrigenFondo = response;
      }
    )
  }

  readOrigenFondo(codigo) {   /* El del servicion */
    this._origenFondoService.readOrigenFondos(codigo).subscribe(
      response => {
        console.log(response)
        this.origenFondosX = response;
      }
    )
  }

  addOrigenFondo() {        /* El del servicion */
    this._origenFondoService.addOrigenFondos(this.origenFondoModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listOrigenFondo();//Para refrescar
          this.formValuesAddOrigenFondo.resetForm(); //"formValuesAddOrigenesFondos" es el  @ViewChild  de agregar
          this.status = "ok"
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

  editOrigenFondo() {
    this.origenFondoModel.codigo = this.origenFondosX.codigo;
    this._origenFondoService.editOrigenFondos(this.origenFondoModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listOrigenFondo();
          this.status = 'Ok'
          this.formValuesEditOrigenFondo.resetForm();
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

  deleteOrigenFondo(){
    this._origenFondoService.deleteOrigenFondos( this.origenFondosX.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listOrigenFondo();
          this.status = 'Ok'
          this.formValuesDeleteOrigenFondo.resetForm();
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