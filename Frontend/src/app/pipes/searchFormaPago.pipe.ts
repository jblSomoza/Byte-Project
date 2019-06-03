import { Injectable, Pipe, PipeTransform, Component } from "@angular/core";

@Pipe({
    name: 'searchFormaPago'
})

@Injectable()

export class searchFormaPago implements PipeTransform{
    transform(items: any, term: any): any{
        if(term === undefined){
            return items;
        }

        return items.filter(function(item) {
            return item.descripcion.toLowerCase().includes(term.toLowerCase());            
        });
    }
}