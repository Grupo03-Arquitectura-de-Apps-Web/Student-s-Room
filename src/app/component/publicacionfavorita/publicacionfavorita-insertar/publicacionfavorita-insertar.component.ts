import { Component, OnInit } from '@angular/core';
//agregamos

import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
import { Publicacionfavorita } from 'src/app/model/publicacionfavorita';
import { PublicacionfavoritaService } from 'src/app/service/publicacionfavorita.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { estudiante } from 'src/app/model/estudiante';
import { Publicacion } from 'src/app/model/publicacion';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { EstudianteService } from 'src/app/service/estudiante.service';
@Component({
  selector: 'app-publicacionfavorita-insertar',
  templateUrl: './publicacionfavorita-insertar.component.html',
  styleUrls: ['./publicacionfavorita-insertar.component.css']
})
export class PublicacionfavoritaInsertarComponent implements OnInit {

  //update part
  id: number = 0;
  edicion: boolean = false;
  //
  form: FormGroup = new FormGroup({}); //importamos Form Group
  Publicacionfavorita: Publicacionfavorita = new Publicacionfavorita(); //importamos la entidad Publicacionfavorita
  mensaje: string = '';
  maxFecha:Date=moment().add(-1,'days').toDate();

  lista_p:Publicacion[]=[];
  Publicacion!:Publicacion;
  idPublicacionSeleccionado:number=0;

  lista_e:estudiante[]=[];
  estudiante!:estudiante;
  idEstudianteSeleccionado:number=0;


  //Agregamos el constructor
  //importamos Publicacionfavorita service
  //importamos router angular
  constructor(
    private PublicacionfavoritaSer: PublicacionfavoritaService,
    private Publicacionser: PublicacionService,
    private estudianteser:EstudianteService,
    private router: Router,
    //update part
    private route: ActivatedRoute //
  ) {}

  //agregamos el ngOnInit
  ngOnInit(): void {
    this.Publicacionser.list().subscribe(
      (data)=>{
        this.lista_p=data;
      }
    )

    this.estudianteser.list().subscribe(
      (data)=>{
        this.lista_e=data;
      }
    )
    //update part
    this.route.params.subscribe((data: Params) => {
      this.id = data['id_publicacion_favorita'];
      this.edicion = data['id_publicacion_favorita'] != null;
      this.init();
    });
    //

    this.form = new FormGroup({
      id: new FormControl(), //importamos FormControl
      fechaguardadoPublicacionfavorita: new FormControl(),
      estudiante: new FormControl(),
      publicacion: new FormControl(),
    });
  }
  selectionChange(ev:any){
    console.log(ev);
    this.Publicacion = this.lista_p.find((e)=>ev.idPublicacion===e.id)!;
  }
  //agregamos el aceptar
  aceptar(): void {
    this.Publicacionfavorita.id = this.form.value['id']; //isPublicacionfavorita es lo que va tener como nombre el componente del formulario en el html
    this.Publicacionfavorita.fechaGuardado = this.form.value['fechaguardadoPublicacionfavorita'];
    this.Publicacionfavorita.estudiante.nombre = this.form.value['estudiante'];
    this.Publicacionfavorita.publicacion.id = this.form.value['publicacion'];

    if(!this.form.valid){
      return;
    }

    if (this.idEstudianteSeleccionado > 0 && this.idPublicacionSeleccionado>0) {
      console.log('hsdf3333');
      //con el metodo suscribe estamos insertando
      console.log(this.idPublicacionSeleccionado);
      console.log(this.Publicacion);

      this.Publicacionfavorita.publicacion= this.Publicacion;

      //update part
      //agregamos una condicional para verificar si se va insertar o editar
      if (this.edicion) {
        //guardar actualizado
        this.PublicacionfavoritaSer.update(this.Publicacionfavorita).subscribe(() => {
          this.PublicacionfavoritaSer.list().subscribe((data) => {
            this.PublicacionfavoritaSer.setList(data);
          });
        });
      //end update part
      } else {
        this.estudiante = new estudiante();
        this.estudiante.idEstudiante= this.idEstudianteSeleccionado;
        this.Publicacionfavorita.estudiante=this.estudiante;

        this.Publicacion = new Publicacion();
        this.Publicacion.id= this.idPublicacionSeleccionado;
        this.Publicacionfavorita.publicacion=this.Publicacion;

        this.PublicacionfavoritaSer.insert(this.Publicacionfavorita).subscribe((data) => {
          this.PublicacionfavoritaSer.list().subscribe((data) => {
            this.PublicacionfavoritaSer.setList(data);
          });
        });
      }
      this.router.navigate(['Publicacionfavorita']);
    } else {
      this.mensaje = 'Ingrese la descripcion del Contrato de Alquiler!!';
    }


  }

  //update part
  init() {
    if (this.edicion) {
      this.PublicacionfavoritaSer.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id), //importamos FormControl
          fechaguardadoPublicacionfavorita: new FormControl(data.fechaGuardado),
          estudiante: new FormControl(data.estudiante),
          publicacion: new FormControl(data.publicacion)
        });
      });
    }
  }
  //
}
