import { Arrendador } from "./arrendador";
import { estudiante } from "./estudiante";

export class Mensaje{
  idMensaje:number = 0;
  descripcion:string = "";
  fecha_envio:Date=new Date(Date.now())
  fecha_recepcion:Date=new Date(Date.now())
  tiempo_respuesta:string = "";
  estado:string = "";
  arrendador: Arrendador=new Arrendador();
  estudiante:estudiante=new estudiante();
}
