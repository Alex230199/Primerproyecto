import { Component } from '@angular/core'; // Importa el decorador necesario para declarar un componente Angular.

@Component({ // Configura el componente y conecta su plantilla, sus estilos y su selector.
  imports: [], // Declara que el componente no necesita importar otros componentes o directivas.
  selector: 'app-hermingo', // Define la etiqueta HTML que permite insertar este componente.
  styleUrl: './hermingo.css', // Indica el archivo CSS que define el aspecto de la tarjeta.
  templateUrl: './hermingo.html', // Indica el archivo HTML que contiene la tarjeta.
}) // Cierra la configuración del decorador Component.
export class Hermingo { // Declara la clase que proporciona los datos usados por la tarjeta.
  readonly numero = 318; // Guarda el número identificador que aparece en la tarjeta.
  readonly nombre = 'Hermingo'; // Guarda el nombre que aparece junto a la imagen.
  readonly clase = 'Mascota'; // Guarda el tipo o clase del personaje.
  readonly imagen = '/images/Hermingo (1).jpg'; // Guarda la ruta pública de la imagen del animal.
  readonly ataque = 1; // Guarda el valor que se muestra junto al icono de espada.
  readonly defensa = 1; // Guarda el valor que se muestra junto al icono de escudo.
  detallesAbiertos = false; // Indica si la descripción inferior está desplegada.

  alternarDetalles(): void { // Alterna entre mostrar y ocultar la descripción.
    this.detallesAbiertos = !this.detallesAbiertos; // Invierte el estado actual del desplegable.
  } // Termina el método que controla el desplegable.
} // Cierra la clase del componente.
