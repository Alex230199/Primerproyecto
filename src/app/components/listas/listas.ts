import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listas',
  styleUrl: './listas.css',
  templateUrl: './listas.html',
})
export class Listas {

  //nombre_frutas:string[] = ['Manzana','Banana','Cereza','Dátil','Elderberry'];
  
  frutas:Fruta[] = [new Fruta('Manzana', false),new Fruta('Banana', true),new Fruta('Cereza',false),new Fruta('Dátil',true),new Fruta('Elderberry',false)];

  
}

class Fruta{

  nombre: string;
  like: boolean;

  constructor (n:string, l:boolean){
    this.nombre = n;
    this.like = l;
  }   
}
