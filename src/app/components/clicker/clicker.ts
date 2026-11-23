import { Component, EventEmitter, Input, Output, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-clicker',
  styleUrl: './clicker.css',
  templateUrl: './clicker.html',
})


export class Clicker {
  cabezazos = 0;

  mostrarporpantalla(valor:number){

    return Math.floor(valor).toLocaleString('es-Es');
  }

  clicar():void{

    this.cabezazos += 1;

  }
}
