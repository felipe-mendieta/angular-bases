import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-maing-page',
  templateUrl: './maing-page.component.html',
  styleUrls: ['./maing-page.component.css'],
})
export class MainPageComponent {
  personajePorDefecto: Personaje = {
    nombre: 'Personaje Por defecto',
    poder: 3000,
  };
  agregarNuevoPersonaje(parametro1: Personaje): void {
    this.dbzService.personajes.push(parametro1);
    console.log(parametro1);
  }

  constructor(private dbzService: DbzService) {}
}
