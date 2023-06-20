import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { contratodealquiler } from '../model/contratodealquier';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class ContratodealquilerService {
  private url = `${base_url}/contratodealquiler`;
  private listaCambio=new Subject<contratodealquiler[]>;
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<contratodealquiler[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //Agregar para el insertar
  insertar (contratodealquiler:contratodealquiler){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,contratodealquiler, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  setlist(listaNueva:contratodealquiler[]){
    this.listaCambio.next(listaNueva);
  }

  //Para el actualizar
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<contratodealquiler>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(c: contratodealquiler) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, c, {
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
