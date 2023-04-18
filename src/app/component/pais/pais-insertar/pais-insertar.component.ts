import { Component, OnInit } from '@angular/core';

//agregamos
import { FormGroup,FormControl } from '@angular/forms';

import { Pais } from './../../../model/pais';

import * as moment from 'moment';

import { PaisService } from './../../../service/pais.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-insertar',
  templateUrl: './pais-insertar.component.html',
  styleUrls: ['./pais-insertar.component.css'],
})
export class PaisInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({}); //importamos Form Group
  pais: Pais = new Pais(); //importamos la entidad Pais
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate(); //importamos del moment

  //Agregamos el constructor
  //importamos pais service
  //importamos router angular
  constructor(private paisSer: PaisService, private router: Router) {}

  //agregamos el ngOnInit
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),//importamos FormControl
      nombrePais: new FormControl(),
      capitalPais: new FormControl(),
      monedaPais: new FormControl()
    });
  }
  //agregamos el aceptar
  aceptar():void{
    this.pais.id = this.form.value['id'];//ispais es lo que va tener como nombre el componente del formulario en el html
    this.pais.nombrePais = this.form.value['nombrePais'];
    this.pais.capitalPais = this.form.value['capitalPais'];
    this.pais.monedaPais = this.form.value['monedaPais'];

    //validacion
    /* if(parseInt(this.form.value['idpais'])){console.log("hsdf1111");
      if(typeof this.form.value['idpais'] == 'number'){console.log("hsdf22222");
        if(Number.isInteger(this.form.value['idpais'])){
          console.log("hsdf3333");
          //con el metodo suscribe estamos insertando
          this.paisSer.insert(this.pais).subscribe(
            (data)=>{
              this.paisSer.list().subscribe(
                (data)=>{
                  this.paisSer.setlist(data);
                }
              );
            }
          );
          //cambiamos la ruta para que actualice
          this.router.navigate(['paises'])
        }else{
          this.mensaje = "Ingrese un id valido";
        }
      }
    } */
    //if(this.form.value['nombrepais']!=null){
      if(this.form.value['nombrePais'].length > 0){
        console.log("hsdf3333");
        //con el metodo suscribe estamos insertando
       /*  this.paisSer.insert(this.pais).subscribe(
          (data)=>{
            this.paisSer.list().subscribe(
              (data)=>{
                this.paisSer.setlist(data);
            }
          );
        }
      ); */
      this.paisSer.insert(this.pais).subscribe((data) => {
        this.paisSer.list().subscribe((data) => {
          this.paisSer.setList(data);
        });
      });
      //cambiamos la ruta para que actualice
      this.router.navigate(['paises'])
      //}

    }else{
      this.mensaje = "Ingrese un id valido";
    }

  }
}
