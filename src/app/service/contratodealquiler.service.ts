import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { contratodealquiler } from '../model/contratodealquier';

import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ContratodealquilerService {

  private url = `${base_url}/contratodealquiler`;
  private listaCambio=new Subject<contratodealquiler[]>;

  //para el eliminar
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<contratodealquiler[]>(this.url);
  }

  //Agregar para el insertar
  insertar (contratodealquiler:contratodealquiler){
    return this.http.post(this.url,contratodealquiler);
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva:contratodealquiler[]){
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    return this.http.get<contratodealquiler>(`${this.url}/${id}`);
  }

  update(c: contratodealquiler) {
    return this.http.put(this.url + '/' + c.id, c);
  }
  //para el eliminar
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
