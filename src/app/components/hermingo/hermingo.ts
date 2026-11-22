import { Component } from '@angular/core'; 

@Component({ 
  imports: [], 
  selector: 'app-hermingo', 
  styleUrl: './hermingo.css', 
  templateUrl: './hermingo.html', 
}) 
export class Hermingo { 
  // Define los datos fijos de la tarjeta de Hermingo.
  readonly numero = 318; 
  readonly nombre = 'Hermingo'; 
  readonly clase = 'Mascota'; 
  readonly imagen = '/images/Hermingo (1).jpg'; 
  readonly ataque = 1; 
  readonly defensa = 1; 
  // Contiene si el bloque de detalles está visible o cerrado.
  detallesAbiertos = false; 

  // Invierte el estado booleano para mostrar u ocultar los detalles.
  alternarDetalles(): void { 
    // Sustituye el valor anterior por su opuesto.
    this.detallesAbiertos = !this.detallesAbiertos; 
  } 
} 
