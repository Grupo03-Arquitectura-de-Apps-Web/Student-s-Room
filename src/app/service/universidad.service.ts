import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universidad } from '../model/universidad';
import { Observable, Subject } from 'rxjs';
import { universidadesPorDistritoDTO } from '../model/universidadesPorDistritoDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UniversidadService {
  private url = `${base_url}/universidad`;
  private listaCambio = new Subject<Universidad[]>();
  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Universidad[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(Universidad: Universidad) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, Universidad, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Universidad[]) {
    this.listaCambio.next(listaNueva);
  }

  listID(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Universidad>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(u: Universidad) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, u, {
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
