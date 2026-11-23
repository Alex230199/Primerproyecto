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
    if (numero === '.' && this[this.campoActivo].includes('.')) return; 
    if (this.campoActivo === 'primerNumero') { 
      this.primerNumero += numero; 
    } else { 
      this.segundoNumero += numero; 
    } 
  } 

  seleccionarOperacion(operacion: '+' | '-' | '*' | '/'): void { 
    this.operacion = operacion; 
  } 

  calcular(): void { 
    if (this.primerNumero === '' || this.segundoNumero === '') { 
      this.resultado = 'Introduce los dos números'; 
      return; 
    } 
    const primerNumero = Number(this.primerNumero); 
    const segundoNumero = Number(this.segundoNumero); 
    switch (this.operacion) { 
      case '+': this.resultado = primerNumero + segundoNumero; break; 
      case '-': this.resultado = primerNumero - segundoNumero; break; 
      case '*': this.resultado = primerNumero * segundoNumero; break; 
      case '/': this.resultado = segundoNumero === 0 ? 'No se puede dividir entre cero' : primerNumero / segundoNumero; break; 
      default: this.resultado = 'Selecciona una operación'; 
    } 
  } 

  borrar(): void { 
    this.primerNumero = ''; 
    this.segundoNumero = ''; 
    this.resultado = 0; 
    this.operacion = null; 
  } 
}
