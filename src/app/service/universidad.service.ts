import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universidad } from '../model/universidad';
import { Subject } from 'rxjs';


const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  private url=`${base_url}/universidad`
  private listaCambio = new Subject<Universidad[]>()
  private confirmaEliminacion = new Subject<Boolean>()


  constructor(private http:HttpClient) {}
    list(){
      return this.http.get<Universidad[]>(this.url);
    }
    insert(Universidad: Universidad) {
      return this.http.post(this.url, Universidad);
    }

    getList() {
      return this.listaCambio.asObservable();
    }
    setList(listaNueva: Universidad[]) {
      this.listaCambio.next(listaNueva);
    }

    listID(id:number){
      return this.http.get<Universidad>(`${this.url}/${id}`);
    }

    update(u:Universidad){
      return this.http.put(this.url + '/' + u.id,u);
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


