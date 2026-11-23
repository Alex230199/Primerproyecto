import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  primerNumero = '';
  segundoNumero = '';
  resultado: number | string = 0;
  operacion: '+' | '-' | '*' | '/' | null = null;
  campoActivo: 'primerNumero' | 'segundoNumero' = 'primerNumero';

  seleccionarCampo(campo: 'primerNumero' | 'segundoNumero'): void {
    this.campoActivo = campo;
  }

  actualizarNumero(campo: 'primerNumero' | 'segundoNumero', event: Event): void {
    this[campo] = (event.target as HTMLInputElement).value;
  }

  agregarnumero(numero: string): void {
    if (this.campoActivo === 'primerNumero') {
      if (numero === '.' && this.primerNumero.includes('.')) {
        return;
      }

      this.primerNumero += numero;
      return;
    }

    if (numero === '.' && this.segundoNumero.includes('.')) {
      return;
    }

    this.segundoNumero += numero;
  }

  seleccionarOperacion(operacion: '+' | '-' | '*' | '/'): void {
    this.operacion = operacion;
  }

  calcular(): void {
    if (this.primerNumero === '' || this.segundoNumero === '') {
      this.resultado = 'Introduce los dos números';
      return;
    }

    if (this.operacion === null) {
      this.resultado = 'Selecciona una operación';
      return;
    }

    const primerNumero = Number(this.primerNumero);
    const segundoNumero = Number(this.segundoNumero);

    if (this.operacion === '+') {
      this.resultado = primerNumero + segundoNumero;
    } else if (this.operacion === '-') {
      this.resultado = primerNumero - segundoNumero;
    } else if (this.operacion === '*') {
      this.resultado = primerNumero * segundoNumero;
    } else if (segundoNumero === 0) {
      this.resultado = 'No se puede dividir entre cero';
    } else {
      this.resultado = primerNumero / segundoNumero;
    }
  }

  borrar(): void {
    this.primerNumero = '';
    this.segundoNumero = '';
    this.resultado = 0;
    this.operacion = null;
  }
}
