import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { estudiante } from '../model/estudiante';

//Agregar para el insertar
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private url = `${base_url}/estudiante`;
  private listaCambio=new Subject<estudiante[]>;
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");

    return this.http.get<estudiante[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insertar (estudiante:estudiante){
    let token = sessionStorage.getItem("token");

    return this.http.post(this.url,estudiante, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva:estudiante[]){
    this.listaCambio.next(listaNueva);
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.get<estudiante>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(e: estudiante) {
    let token = sessionStorage.getItem("token");

    return this.http.put(this.url, e, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  //para el eliminar
  eliminar(id: number) {
    let token = sessionStorage.getItem("token");

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
