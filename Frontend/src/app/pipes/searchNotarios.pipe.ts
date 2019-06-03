import { Injectable, Pipe, PipeTransform, Component } from "@angular/core";

@Pipe({
    name: 'searchNotario'
})

@Injectable()

export class SearchNotariosPipe implements PipeTransform{
    transform(items: any, term: any): any{
        if(term === undefined){
            return items;
        }

        return items.filter(function(item) {
            return item.colegiado.toLowerCase().includes(term.toLowerCase());            
        });
    }
}