import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tipo } from '../model/tipo';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class TipoService {
  private url = `${base_url}/tipo_habitacion`;
  private listaCambio= new Subject<tipo[]>();
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<tipo[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(tipo: tipo) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, tipo, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  getList(){
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: tipo[]){
    this.listaCambio.next(listaNueva);
  }

  listId(id:number){
    let token = sessionStorage.getItem('token');

    return this.http.get<tipo>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(tipo: tipo) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, tipo, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  eliminar(id:number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }

  setConfirmaEliminacion(estado: Boolean){
    this.confirmaEliminacion.next(estado);
  }
}
