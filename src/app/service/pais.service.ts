import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Pais } from '../model/pais';




import { Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private url = `${base_url}/paises`
  //corregir escribiendo luego de agregar xd

  private listaCambio=new Subject<Pais[]>();
  //delete
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) {}

  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Pais[]>(this.url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });//la clase Pet está dentro de otro archivo
		//en el archivo pet.ts dentro de la carpeta module
  }

  //metodos para el insert
  insert (pais:Pais){
    let token = sessionStorage.getItem("token");
      return this.http.post(this.url,pais,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      }
        );
  }

  getList(){
      return this.listaCambio.asObservable();
  }

  setList(listaNueva:Pais[]){
      this.listaCambio.next(listaNueva);
  }
  //update part
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Pais>(`${this.url}/${id}`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(p:Pais){
    let token = sessionStorage.getItem("token");
    //return this.http.put(this.url+'/'+p.id,p);
    return this.http.put(this.url,p,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //delete part
  listarId(id: number) {
    return this.http.get<Pais>(`${this.url}/${id}`);
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
