import { Component, OnInit, ViewChild } from '@angular/core';
import { SupervisorDTO } from "src/app/models/SupervisorDTO.model";
import { SupervisorService } from "src/app/services/supervisor.service";

@Component({
  selector: 'app-ingenieros-valuadores',
  templateUrl: './ingenieros-valuadores.component.html',
  styleUrls: ['./ingenieros-valuadores.component.scss'],
  providers: [SupervisorService]
})
export class IngenierosValuadoresComponent implements OnInit {
  @ViewChild('formAddSupervisor') formValuesAddSupervisor;
  @ViewChild('formEditSupervisor') formValueEditSupervisor;
  @ViewChild('formDeleteSupervisor') formValuesDeleteSupervisor;

  public url: String;
  public status: String;
  public busquedaSupervisor: String
  
  public supervisoresModel: SupervisorDTO;
  public supervisor: SupervisorDTO;
  public visualizarSupervisor: SupervisorDTO;

  constructor(public _supervisorService: SupervisorService) {
    this.supervisoresModel = new SupervisorDTO(0, 0, "", "", "1", true, ""); //Donde se envian los datos al modelo
    this.supervisor = new SupervisorDTO(0, 0, "", "", "1", true, "");
  }

  ngOnInit() {
    this.listSupervisor();
  }

  addSupervisor(){
    this._supervisorService.addSupervisor(this.supervisoresModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listSupervisor();
          this.status = 'Ok';
          this.formValuesAddSupervisor.resetForm();
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

  editSupervisor(){
    this.supervisoresModel.codigo = this.supervisor.codigo;
    this._supervisorService.editSupervisor(this.supervisoresModel).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listSupervisor();
          this.status = 'Ok';
          this.formValueEditSupervisor.resetForm();
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

  deleteSupervisor(){
    var codigo = this.supervisor.codigo;
    this._supervisorService.deleteSupervisor(codigo).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.listSupervisor();
          this.status = 'Ok';
          this.formValuesDeleteSupervisor.resetForm();
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error';
        }
      }
    )
  }

  listSupervisor(){
    this._supervisorService.listSupervisor().subscribe(
      response =>{
        if(response){
          console.log(response);
          this.status = 'Ok';
          this.visualizarSupervisor = response;
        }
      },
      error =>{
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = 'Error';          
        }
      }
    )
  }

  readSupervisor(codigo){
    this._supervisorService.readSupervisor(codigo).subscribe(
      response =>{
        console.log(response);
        this.supervisor = response;
      }
    )
  }

}
