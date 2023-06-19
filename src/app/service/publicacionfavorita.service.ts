import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { Publicacionfavorita } from '../model/publicacionfavorita';


import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class PublicacionfavoritaService {
  private url = `${base_url}/publicacionesfavoritas`
  //corregir escribiendo luego de agregar xd

  private listaCambio=new Subject<Publicacionfavorita[]>();
  //delete
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) {}

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Publicacionfavorita[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });//la clase Pet está dentro de otro archivo
		//en el archivo pet.ts dentro de la carpeta module
  }

  //metodos para el insert
  insert (Publicacionfavorita:Publicacionfavorita){
    let token = sessionStorage.getItem("token");
      return this.http.post(this.url,Publicacionfavorita,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
  }

  getList(){
      return this.listaCambio.asObservable();
  }

  setList(listaNueva:Publicacionfavorita[]){
      this.listaCambio.next(listaNueva);
  }
  //update part
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Publicacionfavorita>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(p:Publicacionfavorita){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,p,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //delete part
  listarId(id: number) {
    return this.http.get<Publicacionfavorita>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`,{
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
