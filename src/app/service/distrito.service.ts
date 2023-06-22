import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Distrito } from '../model/distrito';
import { Subject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class DistritoService {
  private url = `${base_url}/distritos`;
  private listaCambio = new Subject<Distrito[]>();

  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Distrito[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  //Agregar para el insertar
  insertar(distrito: Distrito) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, distrito, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  getlist() {
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva: Distrito[]) {
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Distrito>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(c: Distrito) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  //para el eliminar
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
