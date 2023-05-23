import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  constructor(private dbzService:DbzService){
 
  }
  get arraypersonajes(){
    return this.dbzService.personajes;
  }

    // @Input('arraypersonajes') arraypersonajes:Personaje[]=[];
  
}
