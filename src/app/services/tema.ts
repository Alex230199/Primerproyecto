
import {Injectable, signal} from '@angular/core';

@Injectable({
    providedIn: 'root'
    })

export class TemaService {
    modoOscuro = signal(false);

    /** Alterna entre tema claro y oscuro y actualiza la clase aplicada al documento. */
    cambiarTema(): void{

        this.modoOscuro.update(oscuro => !oscuro);

        document.documentElement.classList.toggle(
'modo-oscuro', this.modoOscuro()

        )
    }
}


