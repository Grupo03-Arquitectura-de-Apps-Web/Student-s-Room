import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user';




import { Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  private url = `${base_url}/registrarusuario`
  //delete
  private confirmaEliminacion = new Subject<Boolean>();
  constructor(private http:HttpClient) {}
  //metodos para el insert
  insert (user:User){
    let token = sessionStorage.getItem("token");
      return this.http.post(this.url,user,{
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      }
    );
  }
}
