import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  styleUrl: './cronometro.css',
  templateUrl: './cronometro.html',
})
export class Cronometro implements OnDestroy {
  segundos = signal(0);
  vueltas: number[] = [];
  activo = false;

  private intervalo = 0;
  private ultimaVuelta = 0;

  alternar(): void {
    if (this.activo) {
      window.clearInterval(this.intervalo);
      this.intervalo = 0;
      this.activo = false;
    } else {
      this.activo = true;
      this.intervalo = window.setInterval(() => {
        this.segundos.update(valor => valor + 1);
      }, 1000);
    }
  }

  registrar(): void {
    const segundos = this.segundos();
    this.vueltas.push(segundos - this.ultimaVuelta);
    this.ultimaVuelta = segundos;
  }

  tiempo(segundos: number): string {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor(segundos / 60) % 60;
    const resto = segundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(resto).padStart(2, '0')}`;
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalo);
  }
}
