import { Injectable, Pipe, PipeTransform, Component } from "@angular/core";

@Pipe({
    name: 'searchOrigenFondo'
})

@Injectable()

export class SearchOrigenFondoPipe implements PipeTransform{
    transform(items: any, term: any): any{
        if(term === undefined){
            return items;
        }

        return items.filter(function(item) {
            return item.descripcion.toLowerCase().includes(term.toLowerCase());            
        });
    }
}