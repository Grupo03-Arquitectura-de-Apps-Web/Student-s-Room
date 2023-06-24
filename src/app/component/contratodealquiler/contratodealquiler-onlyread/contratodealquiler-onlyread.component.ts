import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { contratodealquiler } from 'src/app/model/contratodealquier';
import { ContratodealquilerService } from 'src/app/service/contratodealquiler.service';
import { estudiante } from 'src/app/model/estudiante';
import { habitacion } from 'src/app/model/habitacion';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { HabitacionService } from 'src/app/service/habitacion.service';

@Component({
  selector: 'app-contratodealquiler-onlyread',
  templateUrl: './contratodealquiler-onlyread.component.html',
  styleUrls: ['./contratodealquiler-onlyread.component.css']
})
export class ContratodealquilerOnlyreadComponent {
  id: number = 0;
  onlyread: boolean = false;

  //Agregamos lo siguiente
  form: FormGroup = new FormGroup({});
  Contratodealquiler: contratodealquiler = new contratodealquiler();

  //Estudiante
  lista_e: estudiante[] = [];
  idEstudianteSeleccionado: number = 0;

  //Habitacion
  lista_h: habitacion[] = [];
  idHabitacionSeleccionado: number = 0;

  constructor(

    private cS: ContratodealquilerService,
    private router:Router,
    private route:ActivatedRoute,
    private eS:EstudianteService,
    private hS:HabitacionService,
      ){}
  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.lista_e = data });
    this.hS.list().subscribe(data => { this.lista_h = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.onlyread = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl(),
      fecha_inicio: new FormControl(),
      fecha_pago: new FormControl(),
      fecha_vencimiento: new FormControl(),
      money: new FormControl(),
      estudiante: new FormControl(),
      habitacion: new FormControl(),
    });
  }

  aceptar():void{
    this.Contratodealquiler.id_contratodealquier=this.form.value['id'];
    this.Contratodealquiler.descripcion=this.form.value['descripcion'];
    this.Contratodealquiler.fecha_inicio=this.form.value['fecha_inicio'];
    this.Contratodealquiler.fecha_pago=this.form.value['fecha_pago'];
    this.Contratodealquiler.fecha_vencimiento=this.form.value['fecha_vencimiento'];
    this.Contratodealquiler.money=this.form.value['money'];
    this.Contratodealquiler.estudiante.nombre=this.form.value['estudiante.nombre'];
    this.Contratodealquiler.habitacion.tipo.tipo=this.form.value['habitacion.tipo.tipo'];

    if (
      this.form.value['descripcion'].length > 0
    ) {
      let e = new estudiante();
        e.idEstudiante = this.idEstudianteSeleccionado;
        this.Contratodealquiler.estudiante = e;

        let h = new habitacion();
        h.idHabitacion = this.idHabitacionSeleccionado;
        this.Contratodealquiler.habitacion = h;
      if (this.onlyread) {
        this.cS.update(this.Contratodealquiler).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setlist(data);
          });
        });
      }

      this.router.navigate(['/pages/contratodealquiler']);
    }
  }

  init() {
    if (this.onlyread) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id_contratodealquier),
          descripcion: new FormControl(data.descripcion),
          fecha_inicio: new FormControl(data.fecha_inicio),
          fecha_pago: new FormControl(data.fecha_pago),
          fecha_vencimiento: new FormControl(data.fecha_vencimiento),
          money: new FormControl(data.money),
          estudiante: new FormControl(data.estudiante.idEstudiante),
          habitacion: new FormControl(data.habitacion.idHabitacion),
        });
        this.idEstudianteSeleccionado=data.estudiante.idEstudiante;
        this.idHabitacionSeleccionado=data.habitacion.idHabitacion;
      });
    }
  }

}
