import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  styleUrl: './cronometro.css',
  templateUrl: './cronometro.html',
})
export class Cronometro implements OnDestroy {
  // `signal(0)` crea una señal reactiva inicializada con el número cero.
  segundos = signal(0);
  // Guarda una lista con la duración de cada vuelta registrada.
  vueltas: number[] = [];
  // Indica si el intervalo del cronómetro está actualmente activo.
  activo = false;

  // Conserva el identificador numérico del intervalo del navegador.
  private intervalo = 0;
  // Guarda el segundo en el que se hizo la última vuelta.
  private ultimaVuelta = 0;

  // Alterna el cronómetro entre funcionamiento y pausa.
  alternar(): void {
    // Comprueba si el cronómetro está corriendo.
    if (this.activo) {
      // Cancela la ejecución periódica mediante su identificador.
      window.clearInterval(this.intervalo);
      // Borra el identificador guardado porque ya no hay intervalo activo.
      this.intervalo = 0;
      // Marca el cronómetro como pausado.
      this.activo = false;
    } else {
      // Cambia el estado a activo antes de crear el intervalo.
      this.activo = true;
      // `window.setInterval(...)` ejecuta una función cada 1000 milisegundos.
      this.intervalo = window.setInterval(() => {
            // `() =>` crea una función de flecha sin parámetros.
            // `.update(...)` recibe el valor anterior y permite devolver el nuevo valor.
            // `valor + 1` suma una unidad al último segundo.
        this.segundos.update(valor => valor + 1);
      }, 1000);
    }
  }

  // Calcula y añade el tiempo transcurrido desde la vuelta anterior.
  registrar(): void {
    // Lee el número actual de segundos de la señal.
    const segundos = this.segundos();
    // `.push(...)` añade un elemento al final del array.
    // `-` resta el segundo de referencia al segundo actual.
    this.vueltas.push(segundos - this.ultimaVuelta);
    // Actualiza el punto base para que la siguiente vuelta sea independiente.
    this.ultimaVuelta = segundos;
  }

  // `tiempo` recibe los segundos totales y devuelve un texto con formato HH:MM:SS.
  // `segundos: number` indica que el parámetro debe ser un número.
  // `: string` indica que el método devuelve una cadena de texto.
  tiempo(segundos: number): string {
    // `/` divide el total entre 3600, porque una hora contiene 3600 segundos.
    // `Math.floor(...)` elimina los decimales y conserva únicamente las horas completas.
    // `const horas` guarda ese resultado sin permitir reasignarlo.
    const horas = Math.floor(segundos / 3600);
    // `/ 60` convierte los segundos totales a minutos.
    // `Math.floor(...)` elimina los decimales antes de aplicar la siguiente operación.
    // `% 60` conserva solo los minutos restantes después de completar las horas.
    const minutos = Math.floor(segundos / 60) % 60;
    // `% 60` divide los segundos entre 60 y devuelve únicamente el resto.
    // Ese resto son los segundos que no llegan a formar un minuto completo.
    const resto = segundos % 60;

    // Las comillas invertidas `` ` ` `` crean una plantilla de texto llamada template literal.
    // `${...}` inserta dentro de la plantilla el resultado de una expresión JavaScript.
    // `String(...)` convierte el número recibido en texto para poder usar `.padStart(...)`.
    // `.padStart(2, '0')` añade ceros a la izquierda hasta alcanzar 2 caracteres.
    // Los dos puntos `:` son texto fijo que separa horas, minutos y segundos.
    // Por ejemplo, 9 horas se transforma primero en "9" y después en "09".
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(resto).padStart(2, '0')}`;
  }

  // Limpia el intervalo al destruir el componente para evitar trabajo residual.
  ngOnDestroy(): void {
    window.clearInterval(this.intervalo);
  }
}
