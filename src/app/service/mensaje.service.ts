import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mensaje } from '../model/mensaje';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class MensajeService {

  private url = `${base_url}/mensajes`;
  private listaCambio = new Subject<Mensaje[]>;
  //
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}


  list() {
    return this.http.get<Mensaje[]>(this.url);
  }

  insert(mensaje: Mensaje) {
    return this.http.post(this.url, mensaje);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Mensaje[]) {
    this.listaCambio.next(listaNueva);
  }

  //
  listId(id:number){
    return this.http.get<Mensaje>(`${this.url}/${id}`);
  }

  update(p:Mensaje){
    return this.http.put(this.url + '/' + p.idMensaje,p);
  }
  //
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
