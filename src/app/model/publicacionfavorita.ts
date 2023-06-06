import { estudiante } from "./estudiante";
import { Publicacion } from "./publicacion";

export class Publicacionfavorita{
  id:number=0;
  fechaGuardado:Date=new Date(Date.now());
  estudiante:estudiante= new estudiante();
  publicacion:Publicacion = new Publicacion();
}
