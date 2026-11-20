import { Component } from '@angular/core';

@Component({
  standalone: true, // CAMBIO: permite importar este componente directamente en App.
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  primerNumero = ''; // Guarda como texto el primer número mientras se introduce.
  segundoNumero = ''; // Guarda como texto el segundo número mientras se introduce.
  resultado: number | string = 0; // Guarda el resultado o un mensaje sencillo de error.
  operacion: '+' | '-' | '*' | '/' | null = null; // Guarda la operación seleccionada.
  campoActivo: 'primerNumero' | 'segundoNumero' = 'primerNumero'; // Recuerda en qué campo debe escribir el teclado.

  seleccionarCampo(campo: 'primerNumero' | 'segundoNumero'): void { // Selecciona el campo que recibirá los botones numéricos.
    this.campoActivo = campo; // Guarda el campo que acaba de recibir el foco.
  } // Termina la selección del campo activo.

  actualizarNumero(campo: 'primerNumero' | 'segundoNumero', event: Event): void { // Sincroniza el campo editado con su valor.
    this[campo] = (event.target as HTMLInputElement).value; // Guarda el número escrito en el campo correspondiente.
  } // Termina la actualización del campo.

  agregarnumero(numero: string): void { // Añade un dígito o decimal al campo seleccionado.
    if (numero === '.' && this[this.campoActivo].includes('.')) return; // Evita dos decimales en el mismo número.
    if (this.campoActivo === 'primerNumero') { // Comprueba si está seleccionado el primer campo.
      this.primerNumero += numero; // Añade el carácter al primer número.
    } else { // Atiende el caso en que esté seleccionado el segundo campo.
      this.segundoNumero += numero; // Añade el carácter al segundo número.
    } // Termina la actualización del campo activo.
  } // Termina la entrada desde el teclado numérico.

  seleccionarOperacion(operacion: '+' | '-' | '*' | '/'): void { // Guarda la operación elegida.
    this.operacion = operacion; // Conserva la operación hasta pulsar igual.
  } // Termina el método de selección de operación.

  calcular(): void { // Calcula el resultado usando los dos números y la operación seleccionada.
    if (this.primerNumero === '' || this.segundoNumero === '') { // Comprueba que ambos campos contengan un número.
      this.resultado = 'Introduce los dos números'; // Informa que hay que rellenar los dos campos.
      return; // Evita calcular con campos vacíos.
    } // Termina la comprobación de los campos vacíos.
    const primerNumero = Number(this.primerNumero); // Convierte el primer campo a número.
    const segundoNumero = Number(this.segundoNumero); // Convierte el segundo campo a número.
    switch (this.operacion) { // Elige el cálculo según la operación guardada.
      case '+': this.resultado = primerNumero + segundoNumero; break; // Suma los dos números.
      case '-': this.resultado = primerNumero - segundoNumero; break; // Resta el segundo número al primero.
      case '*': this.resultado = primerNumero * segundoNumero; break; // Multiplica los dos números.
      case '/': this.resultado = segundoNumero === 0 ? 'No se puede dividir entre cero' : primerNumero / segundoNumero; break; // Divide y evita dividir entre cero.
      default: this.resultado = 'Selecciona una operación'; // Informa si todavía no se eligió una operación.
    } // Termina la selección del cálculo.
  } // Termina el método de cálculo.

  borrar(): void { // Restablece los valores de la calculadora.
    this.primerNumero = ''; // Limpia el primer número.
    this.segundoNumero = ''; // Limpia el segundo número.
    this.resultado = 0; // Limpia el resultado.
    this.operacion = null; // Quita la operación seleccionada.
  } // Termina el método de borrado.
}
