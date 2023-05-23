import { Component, Input, OnInit } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  constructor(private dbzService: DbzService) {}
  get arraypersonajes() {
    return this.dbzService.personajes;
  }

  // @Input('arraypersonajes') arraypersonajes:Personaje[]=[];
}
