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
})

export class TarjetaHalloweenComponent {
  @Input() objeto!: ObjetoHalloween;
  @Output() eliminar = new EventEmitter<ObjetoHalloween>();
  imagenNoDisponible = false;

  eliminarObjeto(): void {
    this.eliminar.emit(this.objeto);
  }
}
