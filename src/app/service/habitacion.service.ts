import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let token = sessionStorage.getItem('token');

    return this.http.get<habitacion[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(habitacion: habitacion) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, habitacion, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: habitacion[]) {
    this.listaCambio.next(listaNueva);
  }

  listID(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<habitacion>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(a: habitacion) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, a, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  eliminar(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
