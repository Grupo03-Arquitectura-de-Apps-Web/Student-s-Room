import { tipo } from './tipo';
import { Arrendador } from './arrendador';
import { Distrito } from './distrito';
import { Universidad } from './universidad';

export class habitacion {
  id: number = 0;
  tipo: tipo = new tipo();
  precio: number = 0;
  disponibilidad: string = '';
  Arrendador: Arrendador = new Arrendador();
  Distrito: Distrito = new Distrito();
  Universidad: Universidad = new Universidad();
}
