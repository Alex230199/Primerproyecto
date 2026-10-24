import { CommonModule } from '@angular/common'; // Importa las directivas comunes, incluido ngFor.
import { Component } from '@angular/core'; // Importa el decorador para definir el componente.
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa los controles, el formulario reactivo y las validaciones.
import { ObjetoHalloween, TarjetaHalloweenComponent } from '../tarjetahalloween/tarjetahalloween'; // Importa el tipo del registro y la tarjeta hija.

@Component({ // Configura el componente de Angular.
  imports: [CommonModule, ReactiveFormsModule, TarjetaHalloweenComponent], // Permite usar ngFor, formularios reactivos y el componente de tarjeta.
  selector: 'app-formulariohalloween', // Define el nombre de la etiqueta HTML del componente.
  styleUrl: './formulariohalloween.css', // Indica el archivo de estilos del componente.
  templateUrl: './formulariohalloween.html', // Indica el archivo HTML del componente.
}) // Termina la configuración del componente.
export class Formulariohalloween { // Declara la clase del componente.
  formulario = new FormGroup({ // Crea el formulario y agrupa sus campos.
    imagen: new FormControl('', { // Crea el campo Imagen y empieza vacío.
      nonNullable: true, // Hace que el valor del campo siempre sea texto y no null.
      validators: [Validators.required], // Exige que se indique la URL de una imagen.
    }), // Termina la configuración del campo Imagen.
    objeto: new FormControl('', { // Crea el campo Objeto y empieza vacío.
      nonNullable: true, // Hace que el valor del campo siempre sea texto y no null.
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], // Exige entre 3 y 50 caracteres.
    }), // Termina la configuración del campo Objeto.
    descripcion: new FormControl('', { // Crea el campo Descripción y empieza vacío.
      nonNullable: true, // Hace que el valor del campo siempre sea texto y no null.
      validators: [Validators.required, Validators.minLength(10)], // Exige una descripción de al menos 10 caracteres.
    }), // Termina la configuración del campo Descripción.
    propietario: new FormControl('', { // Crea el campo Propietario y empieza vacío.
      nonNullable: true, // Hace que el valor del campo siempre sea texto y no null.
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], // Exige entre 3 y 50 caracteres.
    }), // Termina la configuración del campo Propietario.
  }); // Termina la creación del formulario.

  objetosHalloween: ObjetoHalloween[] = []; // Guarda todos los objetos de Halloween registrados.

  agregarObjeto(): void { // Define la acción que se ejecuta al enviar el formulario.
    if (this.formulario.invalid) return; // Detiene el envío si los campos no son válidos.
    this.objetosHalloween.push(this.formulario.getRawValue()); // Añade todos los datos del formulario al array.
    this.formulario.reset(); // Limpia los campos para registrar otro objeto.
  } // Termina la acción de envío.
} // Termina la clase del componente.
