import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plan } from '../model/plan';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private url = `${base_url}/plans`;
  private listaCambio = new Subject<Plan[]>;
  //
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}


  list() {
    return this.http.get<Plan[]>(this.url);
  }

  insert(plan: Plan) {
    return this.http.post(this.url, plan);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  setList(listaNueva: Plan[]) {
    this.listaCambio.next(listaNueva);
  }

  //
  listId(id:number){
    return this.http.get<Plan>(`${this.url}/${id}`);
  }

  update(p:Plan){
    return this.http.put(this.url + '/' + p.id,p);
  }
  //
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
