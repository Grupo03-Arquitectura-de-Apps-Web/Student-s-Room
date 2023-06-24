import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { habitacion } from 'src/app/model/habitacion';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Publicacion } from 'src/app/model/publicacion';
import { HabitacionService } from 'src/app/service/habitacion.service';

@Component({
  selector: 'app-publicacion-insertar',
  templateUrl: './publicacion-insertar.component.html',
  styleUrls: ['./publicacion-insertar.component.css'],
})
export class PublicacionInsertarComponent {
  id: number = 0;
  edicion: boolean = false;

  //Agregamos lo siguiente
  form: FormGroup = new FormGroup({});
  publicacion: Publicacion = new Publicacion();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();

  //Habitacion
  lista_h: habitacion[] = [];
  idHabitacionSeleccionado: number = 0;

  //agregamos el constructor
  constructor(
    private pS: PublicacionService,
    private router: Router,
    private route: ActivatedRoute,
    private hS: HabitacionService
  ) {}

  //agregamos el ngOninit
  ngOnInit(): void {
    this.hS.list().subscribe((data) => {
      this.lista_h = data;
    });
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      contenido: new FormControl(),
      fecha_publicacion: new FormControl(),
      num_reacciones: new FormControl(),
      num_comentarios: new FormControl(),
      num_compartidos: new FormControl(),
      habitacion: new FormControl(),
    });
  }

  aceptar(): void {
    this.publicacion.idPublicacion = this.form.value['id'];
    this.publicacion.contenido = this.form.value['contenido'];
    this.publicacion.fecha_publicacion = this.form.value['fecha_publicacion'];
    this.publicacion.num_reacciones = this.form.value['num_reacciones'];
    this.publicacion.num_comentarios = this.form.value['num_comentarios'];
    this.publicacion.num_compartidos = this.form.value['num_compartidos'];
    this.publicacion.habitacion.ubicacion =
      this.form.value['habitacion.ubicacion'];

    if (!this.form.valid) {
      return;
    }

    if (this.idHabitacionSeleccionado.toString().length > 0) {
      let h = new habitacion();
      h.idHabitacion = this.idHabitacionSeleccionado;
      this.publicacion.habitacion = h;
      if (this.edicion) {
        //guardar lo actualizado
        this.pS.update(this.publicacion).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
        //
      } else {
        this.pS.insertar(this.publicacion).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
      }

      this.router.navigate(['pages/publicacion']);
    } else {
      this.mensaje = 'Ingrese todos los datos';
    }
  }

  init() {
    if (this.edicion) {
      this.pS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idPublicacion),
          contenido: new FormControl(data.contenido),
          fecha_publicacion: new FormControl(data.fecha_publicacion),
          num_reacciones: new FormControl(data.num_reacciones),
          num_comentarios: new FormControl(data.num_comentarios),
          num_compartidos: new FormControl(data.num_compartidos),
          habitacion: new FormControl(data.habitacion.idHabitacion),
        });
        this.idHabitacionSeleccionado = data.habitacion.idHabitacion;
      });
    }
  }
}
