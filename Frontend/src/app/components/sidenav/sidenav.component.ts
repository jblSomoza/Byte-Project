import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    

    $(document).ready(function(){


      $('#buscador').keyup(function(){
  

         var mantenimientos = $('.mantenimiento');
         var buscando = $(this).val();
         var item='';
         for( var i = 0; i < mantenimientos.length; i++ ){
             item = $(mantenimientos[i]).html().toLowerCase();
              for(var x = 0; x < item.length; x++ ){
                  if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){

                    $(mantenimientos[i]).parents('#item').show(); 
                    //document.getElementById('notFound').style.display = 'none';  
                      
                  }
                  /*else if( item.indexOf( buscando ) == -1) {  //busca en una cadena string -- lo que se introduce
                    $(mantenimientos[i]).parents('#item').hide(); 
                    document.getElementById('notFound').style.display = 'block';  
                  }*/
                                    
                  else{

                    $(mantenimientos[i]).parents('#item').hide(); 
                                      
                       
                  }
              }
         }
      });
    });
    
  }

}
