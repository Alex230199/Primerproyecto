import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listapersonajes',
  styleUrl: './listapersonajes.css',
  templateUrl: './listapersonajes.html',
})
export class Listapersonajes {

  // Crea e inicializa el array con instancias de Personaje y sus datos.
  personajes:Personaje[] = [new Personaje('Spider-man', true,'/images/spiderman.jpg'),
    new Personaje('Bond, James Bond', false, '/images/Jamesbond.jpg'),
    new Personaje('link', true, '/images/link.jpg'),
    new Personaje ('Mario', true, '/images/Mariobross.jpg'),
    new Personaje('Batman', false, '/images/batman.jpg')
  ];
}

class Personaje {

  // Declara las propiedades que describen a cada personaje.
  nombre: String;
  like: boolean;
  imagen: string;

  // Asigna a las propiedades los valores recibidos al crear el personaje.
  constructor (n:string, l:boolean, s:string){
    // Guarda el nombre recibido.
    this.nombre = n;
    // Guarda si el personaje está marcado como favorito.
    this.like = l;
    // Guarda la ruta de su imagen.
    this.imagen = s;
  }
}
