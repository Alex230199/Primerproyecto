import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators,} from '@angular/forms';
import { ObjetoHalloween, TarjetaHalloweenComponent } from '../tarjetahalloween/tarjetahalloween';

function validarImagen(control: AbstractControl): ValidationErrors | null {
  const valor = String(control.value ?? '').trim();
  const rutaLocalValida = valor.startsWith('/images/') && valor !== '/images/';

  if (rutaLocalValida) {
    return null;
  }

  try {
    const url = new URL(valor);
    return url.protocol === 'https:' && url.hostname ? null : { imagenInvalida: true };
  } catch {
    return { imagenInvalida: true };
  }
}

@Component({
  imports: [CommonModule, ReactiveFormsModule, TarjetaHalloweenComponent],
  selector: 'app-formulariohalloween',
  styleUrl: './formulariohalloween.css',
  templateUrl: './formulariohalloween.html',
})

export class Formulariohalloween {
  formulario = new FormGroup({
    imagen: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, validarImagen],
    }),
    objeto: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(40)],
    }),
    descripcion: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    propietario: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(70)],
    }),
  });

  objetosHalloween: ObjetoHalloween[] = [];

  agregarObjeto(): void {
    if (this.formulario.invalid) {
      return;
    }

    const objeto = this.formulario.getRawValue();
    this.objetosHalloween.push({ ...objeto, imagen: objeto.imagen.trim() });
    this.formulario.reset();
  }

  eliminarObjeto(objetoAEliminar: ObjetoHalloween): void {
    this.objetosHalloween = this.objetosHalloween.filter((objeto) => objeto !== objetoAEliminar);
  }
}
