import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Calculadora } from './components/semaforo/calculadora/calculadora';
import { Listas } from './components/listas/listas';
import { Listapersonajes } from './components/listapersonajes/listapersonajes';
import { Hermingo } from './components/hermingo/hermingo';
import { Menu } from './components/menu/menu';



@Component({
  imports: [RouterOutlet, Semaforo, Calculadora, Listas, Listapersonajes, Hermingo, Menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Primerproyecto');
}
