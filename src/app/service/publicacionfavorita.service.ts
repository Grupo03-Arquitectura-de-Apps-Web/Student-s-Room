import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';


import { Publicacionfavorita } from '../model/publicacionfavorita';


import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class PublicacionfavoritaService {
  private url = `${base_url}/publicacionesfavoritas`
  //corregir escribiendo luego de agregar xd

  private listaCambio=new Subject<Publicacionfavorita[]>();
  //delete
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Publicacionfavorita[]>(this.url);//la clase Pet está dentro de otro archivo
		//en el archivo pet.ts dentro de la carpeta module
  }

  //metodos para el insert
  insert (Publicacionfavorita:Publicacionfavorita){
      return this.http.post(this.url,Publicacionfavorita);
  }

  getList(){
      return this.listaCambio.asObservable();
  }

  setList(listaNueva:Publicacionfavorita[]){
      this.listaCambio.next(listaNueva);
  }
  //update part
  listId(id:number){
    return this.http.get<Publicacionfavorita>(`${this.url}/${id}`);
  }
  update(p:Publicacionfavorita){
    return this.http.put(this.url+'/'+p.id,p);
  }

  //delete part
  listarId(id: number) {
    return this.http.get<Publicacionfavorita>(`${this.url}/${id}`);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
