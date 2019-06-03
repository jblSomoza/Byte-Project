import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaSibDTO} from 'src/app/models/CategoriaDTO.model';
import { CategoriasService} from 'src/app/services/categorias-sib.service';

@Component({
  selector: 'app-categorias-sib',
  templateUrl: './categorias-sib.component.html',
  styleUrls: ['./categorias-sib.component.scss'],
  providers: [CategoriasService]

})
export class CategoriasSIBComponent implements OnInit {

  @ViewChild('formAddCategoria') formValuesAddFCategoria;
  @ViewChild('formEditCategoria') formValuesEditCategoria;
  @ViewChild('formDeleteCategoria') formValuesDeleteCategoria;
 
  public url: String;
  public status: String;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño
  public busquedaCategoriaSIB: string;
  p: number = 1;
  //Variables formaDePago
  public categoriaModel: CategoriaSibDTO;//Para agregar los datos al modelo. (Enviar los datos al modelo)
  public visualizarCategoria: CategoriaSibDTO; //Para listar los datos del modelo. (Se traen los datos del modelo)
  public categoriaX:CategoriaSibDTO; /* Lo usamos en el editar/borrar/read */

  constructor(public _categoriaService: CategoriasService) {
    this.categoriaModel = new CategoriaSibDTO( //mostrar los datos /agregar
      0, 0, "", "", "1", true);
    this.categoriaX = new CategoriaSibDTO(//Para editar Datos
      0, 0, "", "", "1", true);
  }

  ngOnInit() {
  
    this.listCategoria()
  }

  listCategoria() {   /* El del servicion */
    this._categoriaService.lisCategorias().subscribe(
      response => {
        console.log(response)
        this.visualizarCategoria = response;
      }
    )
  }

  readCategoria(codigo) {
    this._categoriaService.readCategorias(codigo).subscribe(
      response => {
        console.log(response)
        this.categoriaX = response;
      }
    )
  }

  addCategoria() {        /* El del servicion */
    this._categoriaService.addCategorias(this.categoriaModel).subscribe(
      response => {
        if (response) {
          this.status = 'Ok';
          this.listCategoria();//Para refrescar
          console.log(response);
          this.formValuesAddFCategoria.resetForm();//Para limpiar
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

  editCategoria() {
    this.categoriaModel.codigo = this.categoriaX.codigo;
    this._categoriaService.editCategorias(this.categoriaModel).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.listCategoria();
          this.status = 'Ok'
          this.formValuesEditCategoria.resetForm();
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

  deleteCategoria(){
    this._categoriaService.deleteCategorias( this.categoriaX.codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listCategoria();
          this.status = 'Ok'
          this.formValuesDeleteCategoria.resetForm();
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
