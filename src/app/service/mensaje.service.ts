import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mensaje } from '../model/mensaje';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class MensajeService {

  private url = `${base_url}/mensajes`;
  private listaCambio = new Subject<Mensaje[]>;
  //
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}


  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Mensaje[]>(this.url,{ headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }

  insert(mensaje: Mensaje) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, mensaje,{ headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Mensaje[]) {
    this.listaCambio.next(listaNueva);
  }

  //
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Mensaje>(`${this.url}/${id}`,{ headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }

  update(p:Mensaje){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,p,{ headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
  //
  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{ headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
