import { Component } from '@angular/core'; 

@Component({ 
  imports: [], 
  selector: 'app-hermingo', 
  styleUrl: './hermingo.css', 
  templateUrl: './hermingo.html', 
}) 
export class Hermingo { 
  readonly numero = 318; 
  readonly nombre = 'Hermingo'; 
  readonly clase = 'Mascota'; 
  readonly imagen = '/images/Hermingo (1).jpg'; 
  readonly ataque = 1; 
  readonly defensa = 1; 
  detallesAbiertos = false; 

  alternarDetalles(): void { 
    this.detallesAbiertos = !this.detallesAbiertos; 
  } 
} 
