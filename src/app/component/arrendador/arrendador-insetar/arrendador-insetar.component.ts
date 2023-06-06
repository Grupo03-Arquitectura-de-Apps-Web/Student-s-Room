import { Component, OnInit } from '@angular/core';

//agregamos
import { FormGroup, FormControl } from '@angular/forms';
import { Arrendador } from 'src/app/model/arrendador';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';


@Component({
  selector: 'app-arrendador-insetar',
  templateUrl: './arrendador-insetar.component.html',
  styleUrls: ['./arrendador-insetar.component.css']
})
export class ArrendadorInsetarComponent implements OnInit {
  //update part
  id: number = 0;
  edicion: boolean = false;
  //
  form: FormGroup = new FormGroup({}); //importamos Form Group
  Arrendador: Arrendador = new Arrendador(); //importamos la entidad Arrendador
  mensaje: string = '';

  lista_p:Plan[]=[];
  plan:Plan = new Plan();
  idPlanSeleccionado:number=0;


  //Agregamos el constructor
  //importamos Arrendador service
  //importamos router angular
  constructor(
    private ArrendadorSer: ArrendadorService,
    private planser: PlanService,
    private router: Router,
    //update part
    private route: ActivatedRoute //
  ) {}

  //agregamos el ngOnInit
  ngOnInit(): void {
    this.planser.list().subscribe(
      (data)=>{
        this.lista_p=data;
      }
    )
    //update part
    this.route.params.subscribe((data: Params) => {
      this.id = data['id_arrendador'];
      this.edicion = data['id_arrendador'] != null;
      this.init();
    });
    //

    this.form = new FormGroup({
      id_arrendador: new FormControl(), //importamos FormControl
      nombreArrendador: new FormControl(),
      correo_laboralArrendador: new FormControl(),
      telefonoArrendador: new FormControl(),
      ciudadArrendador: new FormControl(),
      paisArrendador: new FormControl(),
      plan: new FormControl(),
    });
  }
  selectionChange(ev:any){
    console.log(ev);
    this.plan = this.lista_p.find((e)=>ev.idPlan===e.id)!;
  }
  //agregamos el aceptar
  aceptar(): void {
    this.Arrendador.id_arrendador = this.form.value['id_arrendador']; //isArrendador es lo que va tener como nombre el componente del formulario en el html
    this.Arrendador.nombreArrendador = this.form.value['nombreArrendador'];
    this.Arrendador.correo_laboralArrendador = this.form.value['correo_laboralArrendador'];
    this.Arrendador.telefonoArrendador = this.form.value['telefonoArrendador'];
    this.Arrendador.ciudadArrendador = this.form.value['ciudadArrendador'];
    this.Arrendador.paisArrendador = this.form.value['paisArrendador'];
    this.Arrendador.plan.nombre_plan = this.form.value['plplan.nombre_plan'];
    if(!this.form.valid){
      return;
    }

    if (this.form.value['nombreArrendador'].length > 0) {
      console.log('hsdf3333');
      //con el metodo suscribe estamos insertando
      console.log(this.idPlanSeleccionado);
      console.log(this.plan);

      this.Arrendador.plan= this.plan;
      //update part
      //agregamos una condicional para verificar si se va insertar o editar
      if (this.edicion) {
        //guardar actualizado
        this.ArrendadorSer.update(this.Arrendador).subscribe(() => {
          this.ArrendadorSer.list().subscribe((data) => {
            this.ArrendadorSer.setList(data);
          });
        });
      //end update part
      } else {
        this.ArrendadorSer.insert(this.Arrendador).subscribe((data) => {
          this.ArrendadorSer.list().subscribe((data) => {
            this.ArrendadorSer.setList(data);
          });
        });
      }
      //cambiamos la ruta para que actualice
      this.router.navigate(['arrendador']);
      //}
    } else {
      this.mensaje = 'Ingrese un id valido';
    }
  }

  //update part
  init() {
    if (this.edicion) {
      this.ArrendadorSer.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id_arrendador: new FormControl(data.id_arrendador), //importamos FormControl
          nombreArrendador: new FormControl(data.nombreArrendador),
          correo_laboralArrendador: new FormControl(data.correo_laboralArrendador),
          telefonoArrendador: new FormControl(data.telefonoArrendador),
          ciudadArrendador: new FormControl(data.ciudadArrendador),
          paisArrendador: new FormControl(data.paisArrendador),
          plan: new FormControl(data.plan),
        });
      });
    }
  }
  //
}
