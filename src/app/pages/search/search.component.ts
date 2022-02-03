import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap, } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
inputSearch= new FormControl('');
@Output() submitted=new EventEmitter<string>()// permite comm info de un comp hijo a uno padre
  constructor() {}

  ngOnInit(): void {
    this.onChange();
  }
  onChange():void{
    this.inputSearch.valueChanges//cada que el input cambie emite un evento
    .pipe(
      //operadores de RXJS para emitar el numero elevado de peticiones
      map((query:string)=>query.trim()),//remueve los espacios
      debounceTime(350),//emite el valor luego de cierto tiempo
      distinctUntilChanged(), //VEerifica que el valor que emitira es dif al previo
      filter((query:string)=>query!=''),//verifica que no esta vacio
      tap((query:string)=>this.submitted.emit(query))//emite el valor del input, se convierte en $event

      // tap(res=>console.log(res))
      // FORMA DONDE SE EMITEN MUCHAS PETICIONES  
      // this.inputSearch.valueChanges
      // .pipe(
      //   tap(query=>this.submitted.emit(query)))
    )
    .subscribe();
  }

}
