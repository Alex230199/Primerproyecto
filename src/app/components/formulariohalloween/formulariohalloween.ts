import { Component } from '@angular/core'; // Importa el decorador para definir el componente.
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa los controles, el formulario reactivo y las validaciones.

@Component({ // Configura el componente de Angular.
  imports: [ReactiveFormsModule], // Permite utilizar formularios reactivos en la plantilla.
  selector: 'app-formulariohalloween', // Define el nombre de la etiqueta HTML del componente.
  styleUrl: './formulariohalloween.css', // Indica el archivo de estilos del componente.
  templateUrl: './formulariohalloween.html', // Indica el archivo HTML del componente.
}) // Termina la configuración del componente.
export class Formulariohalloween { // Declara la clase del componente.
  formulario = new FormGroup({ // Crea el formulario y agrupa sus campos.
    nombre: new FormControl('', { // Crea el campo Nombre y empieza vacío.
      nonNullable: true, // Hace que el valor del campo siempre sea texto y no null.
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], // Exige entre 3 y 50 caracteres.
    }), // Termina la configuración del campo Nombre.
    objeto: new FormControl('', { // Crea el campo Objeto y empieza vacío.
      nonNullable: true, // Hace que el valor del campo siempre sea texto y no null.
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(50)], // Exige entre 3 y 50 caracteres.
    }), // Termina la configuración del campo Objeto.
  }); // Termina la creación del formulario.

  objetos: string[] = []; // Guarda los nombres de los objetos que se van añadiendo.

  agregarObjeto(): void { // Define la acción que se ejecuta al enviar el formulario.
    if (this.formulario.invalid) return; // Detiene el envío si los campos no son válidos.
    this.objetos.push(this.formulario.controls.objeto.value); // Añade el objeto sin borrar los que ya estaban.
    this.formulario.controls.objeto.reset(); // Limpia el campo Objeto después de añadirlo.
  } // Termina la acción de envío.
} // Termina la clase del componente.
