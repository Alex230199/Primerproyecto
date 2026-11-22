import { Component, EventEmitter, Input, Output, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-clicker',
  styleUrl: './clicker.css',
  templateUrl: './clicker.html',
})


export class Clicker {
  // Comienza el contador en cero y se incrementará con cada clic.
  cabezazos = 0;

  // Redondea hacia abajo y añade separadores de miles al número mostrado.
  mostrarporpantalla(valor:number){

    // Convierte el valor a entero, después a texto localizado y lo devuelve.
    return Math.floor(valor).toLocaleString('es-Es');
  }

  // Registra un nuevo clic sumando una unidad al contador.
  clicar():void{

    // Actualiza cabezazos tomando su valor anterior y sumándole uno.
    this.cabezazos += 1;

  }
}
