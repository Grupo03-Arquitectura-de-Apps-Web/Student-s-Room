import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Arrendador } from 'src/app/model/arrendador';
import { estudiante } from 'src/app/model/estudiante';
import * as moment from 'moment';
import { Mensaje } from 'src/app/model/mensaje';
import { MensajeService } from 'src/app/service/mensaje.service';
import { EstudianteService } from 'src/app/service/estudiante.service';

@Component({
  selector: 'app-mensaje-insertar',
  templateUrl: './mensaje-insertar.component.html',
  styleUrls: ['./mensaje-insertar.component.css']
})
export class MensajeInsertarComponent {
  id: number = 0;
  edicion: boolean = false;
  maxFecha: Date = moment().add(0, 'days').toDate();
  form: FormGroup = new FormGroup({});
  arrendador: Arrendador = new Arrendador()
  estudiante: estudiante = new estudiante()
  mensaje_: Mensaje = new Mensaje();
  mensaje: string = '';
  lista_a: Arrendador[] = [];
  lista_e: estudiante[] = [];
  idEstudianteSeleccionado: number = 0;
  idArrendadorSeleccionado: number = 0;

  //Agregamos el private route
  constructor(private mS: MensajeService, private router: Router,
    private route: ActivatedRoute, private eS:EstudianteService/*, private aS:ArrendadorService*/) {}

  ngOnInit(): void {
    //
    this.eS.list().subscribe(data => { this.lista_e = data });
    //this.aS.list().subscribe(data => { this.lista_a = data });

    this.route.params.subscribe((data: Params) => {
      this.id = data['idMensaje'];
      this.edicion = data['idMensaje'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      descripcion:new FormControl(),
      fecha_envio:new FormControl(),
      fecha_recepcion:new FormControl(),
      tiempo_respuesta:new FormControl(),
      estado:new FormControl(),
      arrendador:new FormControl(),
      estudiante:new FormControl(),
    });
  }

  aceptar(): void {
    this.mensaje_.idMensaje = this.form.value['id'];
    this.mensaje_.descripcion = this.form.value['descripcion'];
    this.mensaje_.fecha_envio = this.form.value['fecha_envio'];
    this.mensaje_.fecha_recepcion = this.form.value['fecha_recepcion'];
    this.mensaje_.tiempo_respuesta = this.form.value['tiempo_respuesta'];
    this.mensaje_.estado = this.form.value['estado'];
    this.mensaje_.arrendador.id_arrendador = this.form.value['arrendador.id_arrendador'];
    this.mensaje_.estudiante.nombre = this.form.value['estudiante.nombre'];

    if (this.idArrendadorSeleccionado>0 && this.idEstudianteSeleccionado>0) {
      let a = new Arrendador();
      let e = new estudiante();
      a.id_arrendador = this.idArrendadorSeleccionado;
      e.idEstudiante = this.idEstudianteSeleccionado;
      this.mensaje_.arrendador=a;
      this.mensaje_.estudiante=e;

      if (this.edicion) {
        this.mS.update(this.mensaje_).subscribe(() => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      } else {
        this.mS.insert(this.mensaje_).subscribe(() => {
          this.mS.list().subscribe(data => {
                this.mS.setList(data);
              })
            })
      }

      this.router.navigate(['mensajes']);
  }
  else {
       this.mensaje = 'Complete todos los campos!!';
     }
  }

  //
  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idMensaje),
          descripcion:new FormControl(data.descripcion),
          fecha_envio:new FormControl(data.fecha_envio),
          fecha_recepcion:new FormControl(data.fecha_recepcion),
          tiempo_respuesta:new FormControl(data.tiempo_respuesta),
          estado:new FormControl(data.estado),
          arrendador:new FormControl(data.arrendador),
          estudiante:new FormControl(data.estudiante),
        });
        console.log(data);
      });
    }
  }
}
