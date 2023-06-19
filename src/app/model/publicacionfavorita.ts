import { estudiante } from "./estudiante";
import { Publicacion } from "./publicacion";

export class Publicacionfavorita{
  id_publicacion_favorita:number=0;
  fecha_guardado:Date=new Date(Date.now());
  estudiante:estudiante= new estudiante();
  publicacion:Publicacion = new Publicacion();
}
