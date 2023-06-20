import { estudiante } from './estudiante';
import { habitacion } from './habitacion';

export class contratodealquiler{
  id_contratodealquier:number=0
  descripcion:string=""
  fecha_inicio:Date=new Date(Date.now())
  fecha_pago:Date=new Date(Date.now())
  fecha_vencimiento:Date=new Date(Date.now())
  money:number=0
  estudiante:estudiante=new estudiante();
  habitacion:habitacion=new habitacion();
}
