import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Arrendador } from 'src/app/model/arrendador';
import { estudiante } from 'src/app/model/estudiante';
import { Mensaje } from 'src/app/model/mensaje';
import { MensajeService } from 'src/app/service/mensaje.service';

@Component({
  selector: 'app-mensaje-insertar',
  templateUrl: './mensaje-insertar.component.html',
  styleUrls: ['./mensaje-insertar.component.css']
})
export class MensajeInsertarComponent {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  arrendador: Arrendador = new Arrendador()
  estudiante: estudiante = new estudiante()
  mensaje_: Mensaje = new Mensaje();
  mensaje: string = '';
  lista: Mensaje[] = [];
  idEstudianteSeleccionado: number = 0;
  idArrendadorSeleccionado: number = 0;

  //Agregamos el private route
  constructor(private mS: MensajeService, private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    //
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
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
    this.mensaje_.id = this.form.value['id'];
    this.mensaje_.descripcion = this.form.value['descripcion'];
    this.mensaje_.fecha_envio = this.form.value['fecha_envio'];
    this.mensaje_.fecha_recepcion = this.form.value['fecha_recepcion'];
    this.mensaje_.tiempo_respuesta = this.form.value['tiempo_respuesta'];
    this.mensaje_.estado = this.form.value['estado'];
    this.mensaje_.arrendador.id = this.form.value['arrendador.id'];
    this.mensaje_.estudiante.id = this.form.value['estudiante.id'];

    if(!this.form.valid){
      return;
    }

    if (this.form.value['descripcion'].length > 0) {
      //Insert actualizado para que tmb actualice las modificaciones
      if (this.edicion) {
        this.mS.update(this.mensaje_).subscribe(() => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      } else {
        this.mS.insert(this.mensaje_).subscribe((data) => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      }

      this.router.navigate(['mensajes']);
    } else {
      this.mensaje = 'Complete todos los campos!!';
    }
  }

  //
  init() {
    if (this.edicion) {
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
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
