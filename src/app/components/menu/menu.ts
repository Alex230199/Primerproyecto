import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector:'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  imports: [Component, MatToolbarModule, MatButtonModule],
})


export class Menu {}


