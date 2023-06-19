import { Plan } from './plan';

export class Arrendador {
  id_arrendador: number = 0;
  nombre: string = '';
  correo_laboral: string = '';
  telefono: string = '';
  ciudad: string = '';
  pais: string = '';
  plan: Plan = new Plan();
}
