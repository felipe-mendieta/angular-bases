import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-maing-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  personajePorDefectoDesdeTS: Personaje = {
    nombre: 'defaultHero',
    poder: 3000,
  };
  agregarNuevoPersonaje(parametro1: Personaje): void {
    this.dbzService.personajes.push(parametro1);
    console.log(parametro1);
  }
}
