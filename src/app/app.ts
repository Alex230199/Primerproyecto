import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Calculadora } from './components/semaforo/calculadora/calculadora';
import { Listas } from './components/listas/listas';


@Component({
  imports: [RouterOutlet, Semaforo, Calculadora, Listas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Primerproyecto');
}
