import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ciudad } from 'src/app/model/ciudad';
import { Pais } from 'src/app/model/pais';
import { CiudadService } from 'src/app/service/ciudad.service';

@Component({
  selector: 'app-ciudad-insertar',
  templateUrl: './ciudad-insertar.component.html',
  styleUrls: ['./ciudad-insertar.component.css']
})
export class CiudadInsertarComponent {
  id:number=0;
  edicion:boolean=false;

  //Agregamos lo siguiente
  form: FormGroup=new FormGroup({});
  ciudad:Ciudad=new Ciudad();
  mensaje:string='';

  //Pais
  lista_p: Pais[] = [];
  idPaisSeleccionado: number = 0;

  //agregamos el constructor
  constructor(
    private pS: CiudadService,
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
      nombre: new FormControl(),
      pais:new FormControl()
    });
}
aceptar():void{
  this.ciudad.id=this.form.value['id'];
  this.ciudad.nombre=this.form.value['nombre'];
  this.ciudad.pais.idPais=this.form.value['pais'];

  if(!this.form.valid){
    return;
  }

  if (this.idPaisSeleccionado > 0) {
    if (this.edicion) {
      //guardar lo actualizado
      this.pS.update(this.ciudad).subscribe(() => {
        this.pS.list().subscribe((data) => {
          this.pS.setlist(data);
        });
      });
      //
    } else {

      let p =new Pais();
      p.idPais=this.idPaisSeleccionado;
      this.ciudad.pais=p;

      this.pS.insertar(this.ciudad).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setlist(data);
        });
      });
    }

    this.router.navigate(['ciudad']);
  } else {
    this.mensaje = 'Ingrese todos los datos';
  }


}

init() {
  if (this.edicion) {
    this.pS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        id:new FormControl(data.id),
        nombre: new FormControl(data.nombre),
        pais: new FormControl(data.pais),
      });
    });
  }
}
}
