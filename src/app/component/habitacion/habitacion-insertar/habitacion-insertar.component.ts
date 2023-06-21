import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { habitacion } from 'src/app/model/habitacion';
import { Arrendador } from 'src/app/model/arrendador';
import { Distrito } from 'src/app/model/distrito';
import { Universidad } from 'src/app/model/universidad';
import { tipo } from 'src/app/model/tipo';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { TipoService } from 'src/app/service/tipo.service';
import { DistritoService } from 'src/app/service/distrito.service';
import { UniversidadService } from 'src/app/service/universidad.service';
@Component({
  selector: 'app-habitacion-insertar',
  templateUrl: './habitacion-insertar.component.html',
  styleUrls: ['./habitacion-insertar.component.css'],
})
export class HabitacionInsertarComponent {
  id: number = 0;
  edicion: boolean = false;

  //Agregamos lo siguiente
  form: FormGroup = new FormGroup({});
  habitacion: habitacion = new habitacion();
  mensaje: string = '';

  //Tipo
  lista_t: tipo[] = [];
  idTipoSeleccionado: number = 0;

  //Arrendador
  lista_a: Arrendador[] = [];
  idArrendadorSeleccionado: number = 0;

  //Distrito
  lista_d: Distrito[] = [];
  idDistritoSeleccionado: number = 0;

  //Universidad
  lista_u: Universidad[] = [];
  idUniversidadSeleccionada: number = 0;

  //agregamos el constructor
  constructor(
    private hS: HabitacionService,
    private router: Router,
    private route: ActivatedRoute,
    private tS: TipoService,
    private aS: ArrendadorService,
    private dS: DistritoService,
    private uS: UniversidadService
  ) {}

  //agregamos el ngOninit
  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      this.lista_t = data;
    });
    this.aS.list().subscribe((data) => {
      this.lista_a = data;
    });

    this.dS.list().subscribe((data) => {
      this.lista_d = data;
    });
    this.uS.list().subscribe((data) => {
      this.lista_u = data;
    });
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      tipo: new FormControl(),
      precio: new FormControl(),
      disponibilidad: new FormControl(),
      Arrendador: new FormControl(),
      distrito: new FormControl(),
      Universidad: new FormControl(),
    });
  }

  aceptar(): void {
    this.habitacion.idHabitacion = this.form.value['id'];
    this.habitacion.tipo.tipo = this.form.value['tipo.tipo'];
    this.habitacion.precio = this.form.value['precio'];
    this.habitacion.disponibilidad = this.form.value['disponibilidad'];
    this.habitacion.Arrendador.nombre = this.form.value['Arrendador.nombre'];
    this.habitacion.Distrito.nombre = this.form.value['Distrito.nombre'];
    this.habitacion.Universidad.nombre = this.form.value['Universidad.nombre'];

    if (!this.form.valid) {
      return;
    }

    if (
      this.idTipoSeleccionado > 0 &&
      this.idArrendadorSeleccionado > 0 &&
      this.idDistritoSeleccionado > 0 &&
      this.idUniversidadSeleccionada > 0
    ) {
      if (this.edicion) {
        //guardar lo actualizado
        this.hS.update(this.habitacion).subscribe(() => {
          this.hS.list().subscribe((data) => {
            this.hS.setList(data);
          });
        });

        //AQUI VERIFICAR SI FALTA EL DISTRITO Y UNIVERSIDAD
      } else {
        let t = new tipo();
        t.idTipoHabitacion = this.idTipoSeleccionado;
        this.habitacion.tipo = t;

        let a = new Arrendador();
        a.id_arrendador = this.idArrendadorSeleccionado;
        this.habitacion.Arrendador = a;

        let d = new Distrito();
        d.idDistrito = this.idDistritoSeleccionado;
        this.habitacion.Distrito = d;

        let u = new Universidad();
        u.idUniversidad = this.idUniversidadSeleccionada;
        this.habitacion.Universidad = u;

        this.hS.insert(this.habitacion).subscribe((data) => {
          this.hS.list().subscribe((data) => {
            this.hS.setList(data);
          });
        });
      }

      this.router.navigate(['pages/habitacion']);
    } else {
      this.mensaje = 'Ingrese todos los datos';
    }
  }

  init() {
    if (this.edicion) {
      this.hS.listID(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idHabitacion: new FormControl(data.idHabitacion),
          tipo: new FormControl(data.tipo.idTipoHabitacion),
          precio: new FormControl(data.precio),
          disponibilidad: new FormControl(data.disponibilidad),
          Arrendador: new FormControl(data.Arrendador.id_arrendador),
          Distrito: new FormControl(data.Distrito.idDistrito),
          Universidad: new FormControl(data.Universidad.idUniversidad),
        });
      });
    }
  }
}
