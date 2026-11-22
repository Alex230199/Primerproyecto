import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';



@Component({
  imports: [
    RouterOutlet,
    Menu,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Crea una señal protegida y de solo lectura con el título visible de la aplicación.
  protected readonly title = signal('Primerproyecto');
}
