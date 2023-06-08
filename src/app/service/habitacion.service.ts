import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { habitacion } from '../model/habitacion';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class HabitacionService {
  private url = `${base_url}/habitacion`;
  private listaCambio = new Subject<habitacion[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<habitacion[]>(this.url);
  }

  insert(habitacion: habitacion) {
    return this.http.post(this.url, habitacion);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: habitacion[]) {
    this.listaCambio.next(listaNueva);
  }

  listID(id: number) {
    return this.http.get<habitacion>(`${this.url}/${id}`);
  }

  update(a: habitacion) {
    return this.http.put(this.url + '/' + a.id, a);
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
