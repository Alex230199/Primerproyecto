import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listapersonajes',
  styleUrl: './listapersonajes.css',
  templateUrl: './listapersonajes.html',
})
export class Listapersonajes {

  personajes:Personaje[] = [new Personaje('Spider-man', true,'Primerproyecto-master/images/personajes/spiderman.jpg'),
    new Personaje('Bond, James Bond', false, 'Primerproyecto-master/images/personajes/Jamesbond.jpg'),
    new Personaje('link', true, 'Primerproyecto-master/images/personajes/link.jpg'),
    new Personaje ('Mario', true, 'Primerproyecto-master/images/personajes/Mariobross.jpg'),
    new Personaje('Batman', false, 'Primerproyecto-master/images/personajes/batman.jpg')
  ];
}

class Personaje {

  nombre: String;
  like: boolean;
  imagen: string;

  constructor (n:string, l:boolean, s:string){
    this.nombre = n;
    this.like = l;
    this.imagen = s;
  }
}
