import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tipo } from '../model/tipo';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class TipoService {
  private url = `${base_url}/tipo`;
  private listaCambio= new Subject<tipo[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<tipo[]>(this.url);
  }

  insert(tipo: tipo) {
    return this.http.post(this.url, tipo);
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: tipo[]){
    this.listaCambio.next(listaNueva);
  }

  listId(id:number){
    return this.http.get<tipo>(`${this.url}/${id}`);
  }

  update(tipo: tipo) {
    return this.http.put(this.url + '/' + tipo.id, tipo);
  }

  eliminar(id:number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
