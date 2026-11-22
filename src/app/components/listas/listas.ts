import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listas',
  styleUrl: './listas.css',
  templateUrl: './listas.html',
})
export class Listas {

  // Crea e inicializa el array con instancias de la clase Fruta.
  frutas:Fruta[] = [new Fruta('Manzana', false,"/images/manzana.jpg"),new Fruta('Banana', true,"/images/banana.jpg"),
    new Fruta('Cereza',false,"/images/cerezas.jpg"),new Fruta('Dátil',true,"/images/dátil.jpg"),new Fruta('Elderberry',false,"/images/elderberry.jpg")];

  
}

class Fruta{

  // Declara las propiedades de una fruta.
  nombre: string;
  like: boolean;
  imagen:string;

  // Asigna a la fruta los datos recibidos en el constructor.
  constructor (n:string, l:boolean, s:string){
    // Guarda el nombre recibido.
    this.nombre = n;
    // Guarda si la fruta está marcada como favorita.
    this.like = l;
    // Guarda la ruta de la imagen.
    this.imagen=s;
  }   
}
