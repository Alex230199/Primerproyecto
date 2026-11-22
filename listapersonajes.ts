import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listapersonajes',
  styleUrl: './listapersonajes.css',
  templateUrl: './listapersonajes.html',
})
export class Listapersonajes {

  // Crea e inicializa el listado de personajes con sus rutas antiguas de imagen.
  personajes:Personaje[] = [new Personaje('Spider-man', true,'Primerproyecto-master/images/personajes/spiderman.jpg'),
    new Personaje('Bond, James Bond', false, 'Primerproyecto-master/images/personajes/Jamesbond.jpg'),
    new Personaje('link', true, 'Primerproyecto-master/images/personajes/link.jpg'),
    new Personaje ('Mario', true, 'Primerproyecto-master/images/personajes/Mariobross.jpg'),
    new Personaje('Batman', false, 'Primerproyecto-master/images/personajes/batman.jpg')
  ];
}

class Personaje {

  // Declara los datos básicos almacenados por cada personaje.
  nombre: String;
  like: boolean;
  imagen: string;

  // Asigna los argumentos recibidos a las propiedades de la instancia.
  constructor (n:string, l:boolean, s:string){
    // Guarda el nombre recibido.
    this.nombre = n;
    // Guarda el estado de favorito recibido.
    this.like = l;
    // Guarda la ruta de imagen recibida.
    this.imagen = s;
  }
}
