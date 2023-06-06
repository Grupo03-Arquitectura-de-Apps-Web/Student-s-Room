import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../model/ciudad';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private url = `${base_url}/ciudad`;
  private listaCambio=new Subject<Ciudad[]>;

  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Ciudad[]>(this.url);
  }

  //Agregar para el insertar
  insertar (contratodealquiler:Ciudad){
    return this.http.post(this.url,contratodealquiler);
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva:Ciudad[]){
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    return this.http.get<Ciudad>(`${this.url}/${id}`);
  }

  update(c: Ciudad) {
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
    this.confirmaEliminacion.next(estado);}
  }
