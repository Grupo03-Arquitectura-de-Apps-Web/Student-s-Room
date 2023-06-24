import { tipo } from './tipo';
import { Arrendador } from './arrendador';
import { Distrito } from './distrito';
import { Universidad } from './universidad';

export class habitacion {
  idHabitacion: number = 0;
  tipo: tipo = new tipo();
  precio: number = 0;
  disponibilidad: string = '';
  arrendador: Arrendador = new Arrendador();
  distrito: Distrito = new Distrito();
  ubicacion: string = '';
  universidad: Universidad = new Universidad();
}
