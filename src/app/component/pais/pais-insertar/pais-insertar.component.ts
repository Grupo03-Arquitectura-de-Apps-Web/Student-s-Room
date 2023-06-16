import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

//agregamos
import { FormGroup, FormControl } from '@angular/forms';

import { Pais } from './../../../model/pais';

import * as moment from 'moment';

import { PaisService } from './../../../service/pais.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pais-insertar',
  templateUrl: './pais-insertar.component.html',
  styleUrls: ['./pais-insertar.component.css'],
})
export class PaisInsertarComponent implements OnInit {
  //update part
  id: number = 0;
  edicion: boolean = false;
  //
  form: FormGroup = new FormGroup({}); //importamos Form Group
  pais: Pais = new Pais(); //importamos la entidad Pais
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate(); //importamos del moment
  paisIn:Pais =new Pais();
  //Agregamos el constructor
  //importamos pais service
  //importamos router angular
  constructor(
    private paisSer: PaisService,
    private router: Router,
    //update part
    private route: ActivatedRoute //
  ) {}
  titulo!:any;
  //agregamos el ngOnInit
  ngOnInit(): void {
    //update part
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];

      this.edicion = data['id'] != null;
      console.log(this.edicion);
      this.init();
    });
    //
    this.titulo=document.getElementById("titulo");
    this.titulo.textContent= "INSERTAR PAIS";
    document.getElementById("btn-save")!.innerHTML='<span class="material-icons">save</span>'+'Guardar';
    console.log(this.titulo);
    this.form = new FormGroup({
      id: new FormControl(), //importamos FormControl
      nombrePais: new FormControl(),
      capitalPais: new FormControl(),
      monedaPais: new FormControl(),
    });
  }
  //agregamos el aceptar
  aceptar(): void {
    this.pais.idPais = this.form.value['id']; //ispais es lo que va tener como nombre el componente del formulario en el html
    this.pais.nombrePais = this.form.value['nombrePais'];
    this.pais.capitalPais = this.form.value['capitalPais'];
    this.pais.monedaPais = this.form.value['monedaPais'];

    if(!this.form.valid){
      return;
    }

    if (this.form.value['nombrePais'].length > 0) {
      console.log('hsdf3333');
      //con el metodo suscribe estamos insertando

      //update part
      //agregamos una condicional para verificar si se va insertar o editar
      console.log(this.edicion);
      if (this.edicion) {
        //guardar actualizado
        this.paisSer.update(this.pais).subscribe(() => {
          this.paisSer.list().subscribe((data:any) => {
            this.paisSer.setList(data);
          });
        });
      //end update part
      } else {
        this.paisSer.insert(this.pais).subscribe(() => {
          this.paisSer.list().subscribe((data) => {
            this.paisSer.setList(data);
          });
        });
      }
      //cambiamos la ruta para que actualice
      this.router.navigate(['paises']);
      //}
    } else {
      this.mensaje = 'Ingrese un id valido';
    }
  }

  //update part
  init() {
    if (this.edicion) {

      this.paisSer.listId(this.id).subscribe((data:any) => {
        this.titulo.textContent= "ACTUALIZAR PAIS";
        document.getElementById("btn-save")!.innerHTML='<span class="material-icons">save</span>'+'Actualizar';
        console.log(data);

        this.form = new FormGroup({
          id: new FormControl(data.idPais),
          nombrePais: new FormControl(data.nombrePais),
          capitalPais: new FormControl(data.capitalPais),
          monedaPais: new FormControl(data.monedaPais),
        });
      });
    }
  }
  //
}
