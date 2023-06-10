import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
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
    return this.http.get<Pais[]>(this.url);//la clase Pet está dentro de otro archivo
		//en el archivo pet.ts dentro de la carpeta module
  }

  //metodos para el insert
  insert (pais:Pais){
      return this.http.post(this.url,pais);
  }

  getList(){
      return this.listaCambio.asObservable();
  }

  setList(listaNueva:Pais[]){
      this.listaCambio.next(listaNueva);
  }
  //update part
  listId(id:number){
    return this.http.get<Pais>(`${this.url}/${id}`);
  }
  update(p:Pais){
    //return this.http.put(this.url+'/'+p.id,p);
    return this.http.put(this.url,p);
  }

  //delete part
  listarId(id: number) {
    return this.http.get<Pais>(`${this.url}/${id}`);
  }
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
