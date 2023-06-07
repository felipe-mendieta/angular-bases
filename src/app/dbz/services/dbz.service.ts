import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public uuid(): string {
    return (Math.random() + 1).toString(36).substring(7);
  }
  private _personajes: Personaje[] = [
    {
      id: this.uuid(),
      nombre: 'Trunks',
      poder: 1000,
    },
    {
      id: this.uuid(),
      nombre: 'Goku',
      poder: 2000,
    },
    {
      id: this.uuid(),
      nombre: 'Vegueta',
      poder: 1500,
    },
  ];
  constructor() {
    console.log('Servicio inicializado.');
  }
  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  agregarPersonaje(personaje: Personaje) {
    const newPersonaje: Personaje = { id: this.uuid(), ...personaje };

    this._personajes.push(newPersonaje);
    console.log(this._personajes);
  }
  // deletePersonaje(index: number) {
  //   this._personajes.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    this._personajes.filter((personaje) => personaje.id !== id);
  }
}
