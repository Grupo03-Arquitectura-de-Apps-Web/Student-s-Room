import { Plan } from "./plan";

export class Arrendador{
  id_arrendador:number = 0;
  nombreArrendador:string ="";
  correo_laboralArrendador:string="";
  telefonoArrendador:string="";
  ciudadArrendador:string="";
  paisArrendador:string="";
  plan:Plan = new Plan();
}
