import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { habitacion } from 'src/app/model/habitacion';
import { Arrendador } from 'src/app/model/arrendador';
import { Distrito } from 'src/app/model/distrito';
import { Universidad } from 'src/app/model/universidad';
import { tipo } from 'src/app/model/tipo';
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
  maxFecha: Date = moment().add(-1, 'days').toDate();

  //Arrendador
  lista_a: Arrendador[] = [];
  idArrendadorSeleccionado: number = 0;

  //Distrito
  lista_d: Distrito[] = [];
  idDistritoSeleccionado: number = 0;

  //Universidad
  lista_u: Universidad[] = [];
  idUniversidadSeleccionada: number = 0;

  //Tipo
  lista_t: tipo[] = [];
  idTipoSeleccionado: number = 0;

  //agregamos el constructor
  constructor(
    private hS: HabitacionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  //agregamos el ngOninit
  ngOnInit(): void {
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
    this.habitacion.tipo.idTipoHabitacion = this.form.value['tipo'];
    this.habitacion.precio = this.form.value['precio'];
    this.habitacion.disponibilidad = this.form.value['disponibilidad'];
    this.habitacion.Arrendador.id_arrendador = this.form.value['Arrendador.id'];
    this.habitacion.Distrito.id = this.form.value['Distrito.id'];
    this.habitacion.Universidad.idUniversidad =
      this.form.value['Universidad.id'];

    if (!this.form.valid) {
      return;
    }

    if (
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
        let a = new Arrendador();
        a.id_arrendador = this.idArrendadorSeleccionado;
        this.habitacion.Arrendador = a;

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
          id: new FormControl(data.idHabitacion),
          tipo: new FormControl(data.tipo),
          precio: new FormControl(data.precio),
          disponibilidad: new FormControl(data.disponibilidad),
          Arrendador: new FormControl(data.Arrendador),
          Distrito: new FormControl(data.Distrito),
          Universidad: new FormControl(data.Universidad),
        });
      });
    }
  }
}
