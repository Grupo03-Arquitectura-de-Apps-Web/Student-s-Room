import { habitacion } from "./habitacion"

export class Publicacion{
  id:number = 0;
  contenido:string = "";
  fecha_publicacion:Date = new Date(Date.now());
  num_reacciones:number=0;
  num_comentarios:number=0;
  num_compartidos:number=0;
  habitacion:habitacion=new habitacion();
}
