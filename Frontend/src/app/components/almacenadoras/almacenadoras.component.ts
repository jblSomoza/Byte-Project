import { Component, OnInit } from '@angular/core';
import { Almacenadoras } from 'src/app/models/almacenadoras.model';
import { AlmacenadorasService } from 'src/app/services/almacenadoras.service';


@Component({
  selector: 'app-almacenadoras',
  templateUrl: './almacenadoras.component.html',
  styleUrls: ['./almacenadoras.component.scss'],
  providers: [AlmacenadorasService]
})
export class AlmacenadorasComponent implements OnInit {

  public status;
  public basic: boolean = false; //Esta variable es para abrir el modal en CLARITY no es necesaria dependiendo del framework de diseño

  //Variables Almacenadora
  public almacenadoras: Almacenadoras;
  public visualizarAlmacenadora: Almacenadoras;

  constructor(public _almacenadorasService: AlmacenadorasService) { 
    this.visualizarAlmacenadora = new Almacenadoras(0,0,"","","",true)
}
  ngOnInit() {
  this.listarAlmacenadoras()
}

listarAlmacenadoras(){
  this._almacenadorasService.listAlmacenadoras().subscribe(
    response=>{
      console.log(response)
      this.almacenadoras = response;
    }
  )
}

readAlmacenadora(codigo){
  this._almacenadorasService.readAlmacenadora(codigo).subscribe(
    response=>{
      console.log(response)
      this.visualizarAlmacenadora = response;
    }
  )
}

}
