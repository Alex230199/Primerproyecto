import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listapersonajes',
  styleUrl: './listapersonajes.css',
  templateUrl: './listapersonajes.html',
})
export class Listapersonajes {

  personajes:Personaje[] = [new Personaje('Spider-man', true,'/images/spiderman.jpg'),
    new Personaje('Bond, James Bond', false, '/images/Jamesbond.jpg'),
    new Personaje('link', true, '/images/link.jpg'),
    new Personaje ('Mario', true, '/images/Mariobross.jpg'),
    new Personaje('Batman', false, '/images/batman.jpg')
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
