// Importa el decorador para declarar un componente de Angular.
import { Component, Input } from '@angular/core';

// Describe los datos que contiene cada objeto de Halloween.
export interface ObjetoHalloween {
  // Guarda la URL de la imagen del objeto.
  imagen: string;
  // Guarda el nombre del objeto.
  objeto: string;
  // Guarda la descripción del objeto.
  descripcion: string;
  // Guarda el nombre de su propietario.
  propietario: string;
}

// Configura la etiqueta, plantilla y estilos del componente.
@Component({
  // Define la etiqueta que usará el componente padre.
  selector: 'app-tarjeta-halloween',
  // Indica el archivo HTML de la tarjeta.
  templateUrl: './tarjetahalloween.html',
  // Indica el archivo CSS de la tarjeta.
  styleUrl: './tarjetahalloween.css',
})
// Declara el componente que muestra un objeto de Halloween.
export class TarjetaHalloweenComponent {
  // Recibe del componente padre los datos que se mostrarán.
  @Input() objeto!: ObjetoHalloween;
}
