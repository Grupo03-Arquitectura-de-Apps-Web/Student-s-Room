import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Arrendador } from '../model/arrendador';

import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  private url = `${base_url}/arrendadores`
  //corregir escribiendo luego de agregar xd

  private listaCambio=new Subject<Arrendador[]>();
  //delete
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Arrendador[]>(this.url);//la clase Pet está dentro de otro archivo
		//en el archivo pet.ts dentro de la carpeta module
  }

  //metodos para el insert
  insert (Arrendador:Arrendador){
      return this.http.post(this.url,Arrendador);
  }

  getList(){
      return this.listaCambio.asObservable();
  }

  setList(listaNueva:Arrendador[]){
      this.listaCambio.next(listaNueva);
  }
  //update part
  listId(id:number){
    return this.http.get<Arrendador>(`${this.url}/${id}`);
  }
  update(a:Arrendador){
    return this.http.put(this.url+'/'+a.id_arrendador,a);
  }

  //delete part
  listarId(id: number) {
    return this.http.get<Arrendador>(`${this.url}/${id}`);
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
