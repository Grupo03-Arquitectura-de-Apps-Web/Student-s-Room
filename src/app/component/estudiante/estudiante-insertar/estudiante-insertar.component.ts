//Agregar el OnInit
import { Component,OnInit } from '@angular/core';

//Agregar el FormControl para el insertar
import { FormGroup,FormControl } from '@angular/forms';
import { estudiante } from 'src/app/model/estudiante';

//Agregamos los siguientes import para el insetar
import * as moment from 'moment';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-insertar',
  templateUrl: './estudiante-insertar.component.html',
  styleUrls: ['./estudiante-insertar.component.css']
})
export class EstudianteInsertarComponent {
  //Se agrega para editar
  id:number=0;
  edicion:boolean=false;

  //Agregamos lo siguiente
  form: FormGroup=new FormGroup({});
  Estudiante:estudiante=new estudiante();
  mensaje:string='';
  maxFecha:Date=moment().add(-17,'years').toDate();

  //agregamos el constructor
  constructor(
    private pS: EstudianteService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  //agregamos el ngOninit
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form=new FormGroup({
      id:new FormControl(),
      nombre: new FormControl(),
      correo_institucional:new FormControl(),
      fecha_nacimiento: new FormControl(),
      telefono: new FormControl(),

    });
  }

  //Agregar este aceptar
  aceptar():void{
    this.Estudiante.id=this.form.value['id'];
    this.Estudiante.nombre=this.form.value['nombre'];
    this.Estudiante.correo_institucional=this.form.value['correo_institucional'];
    this.Estudiante.fecha_nacimiento=this.form.value['fecha_nacimiento'];
    this.Estudiante.telefono=this.form.value['telefono'];

    if(!this.form.valid){
      return;
    }

    if (this.form.value['nombre'].length > 0) {
      if (this.edicion) {
        //guardar lo actualizado
        this.pS.update(this.Estudiante).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
        //
      } else {
        this.pS.insertar(this.Estudiante).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
      }

      this.router.navigate(['estudiante']);
    } else {
      this.mensaje = 'Ingrese el nombre del Estudiante!!';
    }


  }

  //Se agregar para el actualizar
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id:new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          correo_institucional: new FormControl(data.correo_institucional),
          fecha_nacimiento: new FormControl(data.fecha_nacimiento),
          telefono: new FormControl(data.telefono),
        });
      });
    }
  }
}
