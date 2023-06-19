import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Arrendador } from '../model/arrendador';

import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  private url = `${base_url}/arrendadores`
  //corregir escribiendo luego de agregar xd

  private listaCambio=new Subject<Arrendador[]>();
  //delete
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) {}

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Arrendador[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });//la clase Pet está dentro de otro archivo
		//en el archivo pet.ts dentro de la carpeta module
  }

  //metodos para el insert
  insert (Arrendador:Arrendador){
    let token = sessionStorage.getItem("token");
      return this.http.post(this.url,Arrendador,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
  }

  getList(){
      return this.listaCambio.asObservable();
  }

  setList(listaNueva:Arrendador[]){
      this.listaCambio.next(listaNueva);
  }
  //update part
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Arrendador>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(a:Arrendador){
    let token = sessionStorage.getItem("token");
    ///return this.http.put(this.url+'/'+a.id_arrendador,a);
    return this.http.put(this.url,a,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //delete part
  listarId(id: number) {
    return this.http.get<Arrendador>(`${this.url}/${id}`);
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
