
 
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
 
  // `signal(0)` crea una señal reactiva cuyo valor inicial es cero.
  contador = signal(0);
 
  // Aumenta el contador usando el valor anterior como base.
  incrementar() {
    // `.update(...)` modifica la señal usando una función de actualización.
    // `valor => valor + 1` recibe el valor anterior y devuelve el siguiente.
    this.contador.update(valor => valor + 1);
  }
 
  // Disminuye el contador usando el valor anterior como base.
  decrementar() {
    // Lee el valor actual y devuelve una unidad menos.
    this.contador.update(valor => valor - 1);
  }
 
  // Restablece directamente el contador a cero.
  reset() {
    // Sustituye el valor de la señal por cero.
    this.contador.set(0);
  }
 
  // Selecciona el color textual según el intervalo del contador.
  obtenerColorContador() {
    // `()` ejecuta la señal para leer su valor actual.
    // `==` compara valores; se utiliza aquí para comprobar si es cero.
    if (this.contador() == 0) return 'green';
    // Desde dos devuelve rojo.
    if (this.contador() >= 2) return 'red';
    // Con uno devuelve dorado.
    return 'goldenrod';
  }
 
  // Selecciona el color hexadecimal de la luz solicitada.
  obtenerColorLuz(color: string): string {
    // En cero solo enciende la luz verde.
    if (this.contador() == 0 && color === 'verde') return '#00ff00';
    // Desde dos solo enciende la luz roja.
    if (this.contador() >= 2 && color === 'rojo') return '#ff0000';
    // En uno solo enciende la luz amarilla.
    if (this.contador() === 1 && color === 'amarillo') return '#ffff00';
    // Las luces restantes se muestran apagadas.
    return '#333';
  }
 
  // Selecciona el color de borde según el estado activo.
  obtenerColorBordeLuz(color: string): string {
    // Verde recibe un borde oscuro cuando el contador está en cero.
    if (this.contador() == 0 && color === 'verde') return 'rgb(19, 68, 7)';
    // Rojo recibe un borde oscuro desde el valor dos.
    if (this.contador() >= 2 && color === 'rojo') return 'rgb(68, 7, 7)';
    // Amarillo recibe un borde oscuro en el estado intermedio.
    if (this.contador() === 1 && color === 'amarillo') return 'rgb(94, 92, 0)';
    // Las luces apagadas conservan un borde gris.
    return '#666';
  }
}
 