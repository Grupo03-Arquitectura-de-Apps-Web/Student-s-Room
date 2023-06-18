import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  role:string="";
  constructor(private ls:LoginService){

  }
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
  }

}
