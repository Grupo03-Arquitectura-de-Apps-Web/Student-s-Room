import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from 'src/app/service/registeruser.service';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{

  constructor(private loginService:RegisteruserService, private router: Router,private snackBar: MatSnackBar) { }
  username: string = ""
  password: string = ""
  mensaje: string = ""
  ngOnInit(): void {

  }
  registrarUsuario():void{

  }
}
