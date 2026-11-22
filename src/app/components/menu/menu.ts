import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Semaforo } from '../semaforo/semaforo';
import {TemaService} from '../../services/tema';


@Component({
  selector:'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  imports: [ MatToolbarModule, MatButtonModule, RouterLink ],
})


export class Menu {
  // Inyecta el servicio y lo expone como propiedad pública del componente.
  constructor(public temaService: TemaService) {}
}


