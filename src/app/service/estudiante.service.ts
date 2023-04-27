import { HttpClient } from '@angular/common/http';
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

  //para el eliminar
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<estudiante[]>(this.url);
  }

  //Agregar para el insertar
  insertar (estudiante:estudiante){
    return this.http.post(this.url,estudiante);
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva:estudiante[]){
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    return this.http.get<estudiante>(`${this.url}/${id}`);
  }

  update(e: estudiante) {
    return this.http.put(this.url + '/' + e.id, e);
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
