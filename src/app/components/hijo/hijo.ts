import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo {

  // Declara una entrada reactiva cuyo valor inicial es una cadena vacía.
  mensaje = input ('');
}
