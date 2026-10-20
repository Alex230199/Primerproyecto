import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Listapersonajes } from './components/listapersonajes/listapersonajes';
import { Hermingo } from './components/hermingo/hermingo';
import { Calculadora } from './components/semaforo/calculadora/calculadora';
import { Listas } from './components/listas/listas';
import { Menu } from './components/menu/menu';
import{Formulariohalloween}from './components/formulariohalloween/formulariohalloween'; 


export const routes: Routes = [
  { path: 'semaforo', component: Semaforo },
  { path: 'listapersonajes', component: Listapersonajes },
  { path: 'hermingo', component: Hermingo },
  { path: 'menu', component: Menu },
  { path: 'calculadora', component: Calculadora },
  { path: 'listas', component: Listas },
  {path: 'formulariohalloween', component: Formulariohalloween},

];
