import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ObjetoHalloween, TarjetaHalloweenComponent } from '../tarjetahalloween/tarjetahalloween';

// Recibe el control del formulario y valida su contenido como ruta local o URL HTTPS.
function validarImagen(control: AbstractControl): ValidationErrors | null {

  // `const` declara una constante que no se puede reasignar.
  // `String(...)` convierte el valor recibido a texto.
  // `control.value ?? ''` usa '' solo cuando control.value es null o undefined.
  // `.trim()` elimina los espacios del principio y del final.
  const valor = String(control.value ?? '').trim();

  // `valor.startsWith('/images/')` comprueba si el texto comienza exactamente con esa ruta.
  // `&&` significa "y": ambas condiciones deben cumplirse.
  // `>` compara longitudes y `length` contiene el número de caracteres del texto.
  if (valor.startsWith('/images/') && valor.length > '/images/'.length) return null;

  // `try` intenta ejecutar código que podría producir un error.
  try {

    // `new URL(...)` crea un objeto URL a partir del texto; si el formato es inválido produce una excepción.
    const url = new URL(valor);

    // `url.protocol` obtiene el protocolo.
    // `===` compara por igualdad estricta, incluyendo el tipo.
    // `url.hostname` contiene el dominio.
    // `&&` exige que el protocolo sea HTTPS y que exista un dominio.
    // `? null : { ... }` es un operador ternario: si es válido devuelve null; si no, devuelve el error.
    return url.protocol === 'https:' && url.hostname ? null : { imagenInvalida: true };

  // `catch` captura el error producido dentro de try.
  } catch {

    // Devuelve un objeto de error porque Angular usa esta estructura para marcar el control como inválido.
    return { imagenInvalida: true };
  }

}

@Component({

  imports: [CommonModule, ReactiveFormsModule, TarjetaHalloweenComponent],

  selector: 'app-formulariohalloween',

  styleUrl: './formulariohalloween.css',

  templateUrl: './formulariohalloween.html',

}
)

export class Formulariohalloween {

  // `new FormGroup(...)` crea un grupo de controles reactivos.
  // Las parejas `nombre: valor` representan propiedades dentro de un objeto.
  formulario = new FormGroup({

    // `new FormControl(...)` crea el campo reactivo de imagen.
    // `''` es su valor inicial.
    // `nonNullable: true` impide que este control use null como valor.
    // `validators: [...]` activa las validaciones required y validarImagen.
    imagen: new FormControl('', {

      nonNullable: true,

      validators: [Validators.required, validarImagen],

    }
  ),

    objeto: new FormControl('', {

      nonNullable: true,

      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)],

    }
  ),

    descripcion: new FormControl('', {

      nonNullable: true,

      validators: [Validators.required, Validators.minLength(10)],

    }
  ),

    propietario: new FormControl('', {

      nonNullable: true,

      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)],

    }
  ),

  }
);

  // `ObjetoHalloween[]` es un array de objetos ObjetoHalloween.
  // `= []` inicia el array vacío.
  objetosHalloween: ObjetoHalloween[] = [];

  // `(): void` significa que el método no devuelve ningún valor.
  agregarObjeto(): void {

    // `.invalid` vale true si alguna validación del formulario falla.
    // `if (...) return` sale del método sin ejecutar las instrucciones siguientes.
    if (this.formulario.invalid) return;

    // `.getRawValue()` lee los valores actuales de todos los controles.
    // `const` crea una constante llamada objeto.
    const objeto = this.formulario.getRawValue();

    // `.push(...)` añade un elemento al final del array.
    // `{ ...objeto }` usa el operador spread para copiar las propiedades de objeto.
    // `imagen: objeto.imagen.trim()` reemplaza la imagen copiada por su versión sin espacios.
    this.objetosHalloween.push({ ...objeto, imagen: objeto.imagen.trim() });

    // `.reset()` devuelve los controles a sus valores iniciales.
    this.formulario.reset();

  }

  // `objetoAEliminar: ObjetoHalloween` indica que el parámetro debe ser ese tipo.
  // `(): void` indica que el método no devuelve datos.
  eliminarObjeto(objetoAEliminar: ObjetoHalloween): void {

    // `.filter(...)` crea un nuevo array conservando solo las coincidencias de la condición.
    // `objeto !== objetoAEliminar` conserva los objetos cuya referencia es distinta al recibido.
    // `=>` separa el parámetro de la expresión en una función de flecha.
    this.objetosHalloween = this.objetosHalloween.filter((objeto) => objeto !== objetoAEliminar);

  }
  
}
