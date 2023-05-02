import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Plan } from 'src/app/model/plan';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlanService } from 'src/app/service/plan.service';

@Component({
  selector: 'app-plan-insertar',
  templateUrl: './plan-insertar.component.html',
  styleUrls: ['./plan-insertar.component.css']
})
export class PlanInsertarComponent {
//
id: number = 0;
edicion: boolean = false;

form: FormGroup = new FormGroup({});
plan: Plan = new Plan();
mensaje: string = '';
//Agregamos el private route
constructor(private pS: PlanService, private router: Router,
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
    nombre_plan: new FormControl(),
    precio: new FormControl(),
    descripcion: new FormControl(),
  });
}

aceptar(): void {
  this.plan.id = this.form.value['id'];
  this.plan.nombre_plan = this.form.value['nombre_plan'];
  this.plan.precio = this.form.value['precio'];
  this.plan.descripcion = this.form.value['descripcion'];

  if(!this.form.valid){
    return;
  }

  if (this.form.value['nombre_plan'].length > 0) {
    //Insert actualizado para que tmb actualice las modificaciones
    if (this.edicion) {
      this.pS.update(this.plan).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
    } else {
      this.pS.insert(this.plan).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
    }

    this.router.navigate(['plans']);
  } else {
    this.mensaje = 'Complete todos los campos!!';
  }
}

//
init() {
  if (this.edicion) {
    this.pS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        id: new FormControl(data.id),
        nombre_plan: new FormControl(data.nombre_plan),
        precio: new FormControl(data.precio),
        descripcion: new FormControl(data.descripcion),
      });
      console.log(data);
    });
  }
}

}
