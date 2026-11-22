import { Component } from '@angular/core';

@Component({
  standalone: true, 
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  // Inicializa el texto del primer operando; queda vacío hasta que el usuario introduzca un valor.
  primerNumero = '';
  // Inicializa el texto del segundo operando; se completa mediante los botones o el campo de entrada.
  segundoNumero = '';
  // Permite guardar tanto un número calculado como un mensaje de error o de validación.
  resultado: number | string = 0;
  // Guarda la operación elegida y usa null mientras todavía no se ha seleccionado ninguna.
  operacion: '+' | '-' | '*' | '/' | null = null;
  // Indica cuál de los dos operandos recibirá los próximos dígitos introducidos.
  campoActivo: 'primerNumero' | 'segundoNumero' = 'primerNumero';

  // Cambia el operando activo sin modificar los valores que ya contiene.
  seleccionarCampo(campo: 'primerNumero' | 'segundoNumero'): void { 
    // Asigna el campo recibido para que los siguientes números se concatenen en él.
    this.campoActivo = campo; 
  } 

  // Copia el texto escrito manualmente en el campo seleccionado.
  actualizarNumero(campo: 'primerNumero' | 'segundoNumero', event: Event): void { 
    // Convierte el elemento receptor a input y obtiene su propiedad value como texto.
    this[campo] = (event.target as HTMLInputElement).value; 
  } 

  // Añade el número recibido al operando activo y controla el punto decimal.
  agregarnumero(numero: string): void { 
    // `numero === '.'` compara el texto recibido con un punto decimal.
    // `.includes('.')` busca si el operando activo ya contiene un punto.
    // `&&` exige que ambas condiciones sean verdaderas.
    // `return` termina el método sin añadir otro punto.
    if (numero === '.' && this[this.campoActivo].includes('.')) return; 
    // Comprueba si el destino actual es el primer operando.
    if (this.campoActivo === 'primerNumero') { 
      // `+=` significa sumar el texto nuevo al texto existente y guardar el resultado.
      this.primerNumero += numero; 
    } else { 
      // Si no es el primero, añade el carácter al final del segundo número.
      this.segundoNumero += numero; 
    } 
  } 

  // Guarda el símbolo de la operación elegida.
  seleccionarOperacion(operacion: '+' | '-' | '*' | '/'): void { 
    // Asigna la operación recibida a la propiedad usada por calcular().
    this.operacion = operacion; 
  } 

  // Comprueba los operandos y ejecuta la operación aritmética elegida.
  calcular(): void { 
    // Si falta cualquiera de los dos operandos, informa al usuario.
    if (this.primerNumero === '' || this.segundoNumero === '') { 
      // Reemplaza el resultado por el mensaje de validación.
      this.resultado = 'Introduce los dos números'; 
      // Termina el cálculo antes de convertir o operar valores incompletos.
      return; 
    } 
    // `Number(...)` convierte el texto a número para poder hacer operaciones matemáticas.
    const primerNumero = Number(this.primerNumero); 
    // Convierte el segundo operando escrito como texto a número.
    const segundoNumero = Number(this.segundoNumero); 
    // `switch` selecciona una rama según el valor exacto de `this.operacion`.
    switch (this.operacion) { 
      // Suma ambos números si se seleccionó +.
      case '+': this.resultado = primerNumero + segundoNumero; break; 
      // Resta el segundo número al primero si se seleccionó -.
      case '-': this.resultado = primerNumero - segundoNumero; break; 
      // Multiplica ambos números si se seleccionó *.
      case '*': this.resultado = primerNumero * segundoNumero; break; 
      // `=== 0` comprueba igualdad estricta con el número cero.
      // `?` y `:` forman el ternario: si es cero muestra el mensaje; si no, divide.
      case '/': this.resultado = segundoNumero === 0 ? 'No se puede dividir entre cero' : primerNumero / segundoNumero; break; 
      // Si no hay operación seleccionada, devuelve un mensaje de validación.
      default: this.resultado = 'Selecciona una operación'; 
    } 
  } 

  // Vacía los operandos y restablece el resultado y la operación.
  borrar(): void { 
    // Elimina el texto del primer operando.
    this.primerNumero = ''; 
    // Elimina el texto del segundo operando.
    this.segundoNumero = ''; 
    // Devuelve el resultado visual al valor inicial.
    this.resultado = 0; 
    // Indica que ya no hay una operación seleccionada.
    this.operacion = null; 
  } 
}
