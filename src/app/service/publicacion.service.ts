import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../model/publicacion';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;


@Injectable({
  providedIn: 'root'
})

export class PublicacionService {
  private url = `${base_url}/publicacion`;
  private listaCambio=new Subject<Publicacion[]>;

  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Publicacion[]>(this.url);
  }

  //Agregar para el insertar
  insertar (contratodealquiler:Publicacion){
    return this.http.post(this.url,contratodealquiler);
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva:Publicacion[]){
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    return this.http.get<Publicacion>(`${this.url}/${id}`);
  }

  update(c: Publicacion) {
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
    this.confirmaEliminacion.next(estado);
  }}
