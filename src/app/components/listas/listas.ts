import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-listas',
  styleUrl: './listas.css',
  templateUrl: './listas.html',
})
export class Listas {

  //nombre_frutas:string[] = ['Manzana','Banana','Cereza','Dátil','Elderberry'];
  
  frutas:Fruta[] = [new Fruta('Manzana', false,"/images/manzana.jpg"),new Fruta('Banana', true,"/images/banana.jpg"),
    new Fruta('Cereza',false,"/images/cerezas.jpg"),new Fruta('Dátil',true,"/images/dátil.jpg"),new Fruta('Elderberry',false,"/images/elderberry.jpg")];

  
}

class Fruta{

  nombre: string;
  like: boolean;
  imagen:string;

  constructor (n:string, l:boolean, s:string){
    this.nombre = n;
    this.like = l;
    this.imagen=s;
  }   
}
