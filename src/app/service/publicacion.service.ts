import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../model/publicacion';
import { Subject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  private url = `${base_url}/publicacion`;
  private listaCambio = new Subject<Publicacion[]>();

  private confirmaEliminacion = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Publicacion[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //Agregar para el insertar
  insertar(Publicacion: Publicacion) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, Publicacion, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  getlist() {
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva: Publicacion[]) {
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Publicacion>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(c: Publicacion) {
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
