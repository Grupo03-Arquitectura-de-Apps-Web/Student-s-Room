import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { contratodealquiler } from 'src/app/model/contratodealquier';
import { ContratodealquilerService } from 'src/app/service/contratodealquiler.service';
import { estudiante } from 'src/app/model/estudiante';
import { habitacion } from 'src/app/model/habitacion';

@Component({
  selector: 'app-contratodealquiler-insertar',
  templateUrl: './contratodealquiler-insertar.component.html',
  styleUrls: ['./contratodealquiler-insertar.component.css']
})
export class ContratodealquilerInsertarComponent {

   id:number=0;
  edicion:boolean=false;

  //Agregamos lo siguiente
  form: FormGroup=new FormGroup({});
  Contratodealquiler:contratodealquiler=new contratodealquiler();
  mensaje:string='';
  maxFecha:Date=moment().add(-1,'days').toDate();

  //Estudiante
  lista_e: estudiante[] = [];
  idEstudianteSeleccionado: number = 0;

  //Habitacion
  lista_h: habitacion[] = [];
  idHabitacionSeleccionado: number = 0;

  //agregamos el constructor
  constructor(
    private pS: ContratodealquilerService,
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
      descripcion: new FormControl(),
      fecha_inicio:new FormControl(),
      fecha_pago: new FormControl(),
      fecha_vencimiento: new FormControl(),
      monto: new FormControl(),
      estudiante: new FormControl(),
      habitacion: new FormControl(),

    });
  }

  //Agregar este aceptar
  aceptar():void{
    this.Contratodealquiler.id=this.form.value['id'];
    this.Contratodealquiler.descripcion=this.form.value['descripcion'];
    this.Contratodealquiler.fecha_inicio=this.form.value['fecha_inicio'];
    this.Contratodealquiler.fecha_pago=this.form.value['fecha_pago'];
    this.Contratodealquiler.fecha_vencimiento=this.form.value['fecha_vencimiento'];
    this.Contratodealquiler.monto=this.form.value['monto'];
    this.Contratodealquiler.estudiante.nombre=this.form.value['estudiante.nombre'];
    this.Contratodealquiler.habitacion.id=this.form.value['habitacion'];

    if(!this.form.valid){
      return;
    }

    if (this.idEstudianteSeleccionado > 0 && this.idHabitacionSeleccionado>0) {
      if (this.edicion) {
        //guardar lo actualizado
        this.pS.update(this.Contratodealquiler).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
        //
      } else {
        let e = new estudiante();
        e.idEstudiante = this.idEstudianteSeleccionado;
        this.Contratodealquiler.estudiante=e;

        let h =new habitacion();
        h.id=this.idHabitacionSeleccionado;
        this.Contratodealquiler.habitacion=h;

        this.pS.insertar(this.Contratodealquiler).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
      }

      this.router.navigate(['contratodealquiler']);
    } else {
      this.mensaje = 'Ingrese la descripcion del Contrato de Alquiler!!';
    }


  }


  //Se agregar para el actualizar
  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id:new FormControl(data.id),
          descripcion: new FormControl(data.descripcion),
          fecha_inicio: new FormControl(data.fecha_inicio),
          fecha_pago: new FormControl(data.fecha_pago),
          fecha_vencimiento: new FormControl(data.fecha_vencimiento),
          monto: new FormControl(data.monto),
          estudiante: new FormControl(data.estudiante),
          habitacion: new FormControl(data.habitacion),
        });
      });
    }
  }

}
