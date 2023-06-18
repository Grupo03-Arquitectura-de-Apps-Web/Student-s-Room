import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit{
  role:string="";

  constructor( private ls:LoginService){

  }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
  }
  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.ls.showRole();
    return this.ls.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='ESTUDIANTE' || this.role=='ARRENDADOR'){
      return true;
    }else{
      return false;
    }
  }
}
