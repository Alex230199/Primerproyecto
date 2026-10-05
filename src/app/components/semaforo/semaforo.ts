
 
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  imports: [CommonModule],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
 
  contador = signal(0);
 
  incrementar() {
    this.contador.update(valor => valor + 1);
  }
 
  decrementar() {
    this.contador.update(valor => valor - 1);
  }
 
  reset() {
    this.contador.set(0);
  }
 
  obtenerColorContador() {
    if (this.contador() == 0) return 'green';
    if (this.contador() > 2) return 'red';
    return 'goldenrod';
  }
 
  obtenerColorLuz(color: string): string {
    if (this.contador() == 0 && color === 'verde') return '#00ff00';
    if (this.contador() > 2 && color === 'rojo') return '#ff0000';
    if (this.contador() === 1 && color === 'amarillo') return '#ffff00';
    return '#333';
  }
 
  obtenerColorBordeLuz(color: string): string {
    if (this.contador() == 0 && color === 'verde') return 'rgb(19, 68, 7)';
    if (this.contador() > 2 && color === 'rojo') return 'rgb(68, 7, 7)';
    if (this.contador() === 1 && color === 'amarillo') return 'rgb(94, 92, 0)';
    return '#666';
  }
}
 