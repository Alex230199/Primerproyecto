import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ObjetoHalloween {
  imagen: string;
  objeto: string;
  descripcion: string;
  propietario: string;
}

@Component({

  selector: 'app-tarjeta-halloween',

  templateUrl: './tarjetahalloween.html',

  styleUrl: './tarjetahalloween.css',

}
)

export class TarjetaHalloweenComponent {

  // Recibe desde el componente padre el objeto que representa esta tarjeta.
  @Input() objeto!: ObjetoHalloween;

  // Permite emitir hacia el padre la solicitud de eliminación.
  @Output() eliminar = new EventEmitter<ObjetoHalloween>();

  // Indica si debe mostrarse el contenido alternativo por un fallo de imagen.
  imagenNoDisponible = false;

  // Solicita al componente padre que elimine el objeto mostrado.
  Eliminacion(): void {

    // Emite el objeto actual como dato del evento eliminar.
    this.eliminar.emit(this.objeto);

  }
  
}
