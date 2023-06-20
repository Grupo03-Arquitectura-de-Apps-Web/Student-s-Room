import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Distrito } from '../model/distrito';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class DistritoService {
  private url = `${base_url}/distrito`;
  private listaCambio = new Subject<Distrito[]>();

  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Distrito[]>(this.url);
  }

  //Agregar para el insertar
  insertar(contratodealquiler: Distrito) {
    return this.http.post(this.url, contratodealquiler);
  }
  getlist() {
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva: Distrito[]) {
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    return this.http.get<Distrito>(`${this.url}/${id}`);
  }

  update(c: Distrito) {
    return this.http.put(this.url + '/' + c.idDistrito, c);
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
