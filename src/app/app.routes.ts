import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Listapersonajes } from './components/listapersonajes/listapersonajes';
import { Calculadora } from './components/calculadora/calculadora';
import { Listas } from './components/listas/listas';
import { Menu } from './components/menu/menu';
import{Formulariohalloween}from './components/formulariohalloween/formulariohalloween'; 
import { Padre } from './components/padre/padre';
import { Clicker } from './components/clicker/clicker';


export const routes: Routes = [
  { path: 'semaforo', component: Semaforo },
  { path: 'listapersonajes', component: Listapersonajes },
  { path: 'menu', component: Menu },
  { path: 'calculadora', component: Calculadora },
  { path: 'listas', component: Listas },
  { path: 'Padre', component: Padre },
  {path: 'formulariohalloween', component: Formulariohalloween},
  { path: 'Clicker', component: Clicker},
];
