import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ciudad } from 'src/app/model/ciudad';
import { Distrito } from 'src/app/model/distrito';
import { DistritoService } from 'src/app/service/distrito.service';

@Component({
  selector: 'app-distrito-insertar',
  templateUrl: './distrito-insertar.component.html',
  styleUrls: ['./distrito-insertar.component.css']
})
export class DistritoInsertarComponent {
  id:number=0;
  edicion:boolean=false;

  //Agregamos lo siguiente
  form: FormGroup=new FormGroup({});
  distrito:Distrito=new Distrito();
  mensaje:string='';

  //Ciudad
  lista_c: Ciudad[] = [];
  idCiudadSeleccionada: number = 0;

  //agregamos el constructor
  constructor(
    private pS: DistritoService ,
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
      ciudad: new FormControl(),
    });
  }
  aceptar():void{
    this.distrito.id=this.form.value['id'];
    this.distrito.nombre=this.form.value['nombre'];
    this.distrito.ciudad.id=this.form.value['ciudad.id'];

    if(!this.form.valid){
      return;
    }

    if (this.idCiudadSeleccionada > 0) {
      if (this.edicion) {
        //guardar lo actualizado
        this.pS.update(this.distrito).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
        //
      } else {

        let c =new Ciudad();
        c.id=this.idCiudadSeleccionada;
        this.distrito.ciudad=c;

        this.pS.insertar(this.distrito).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setlist(data);
          });
        });
      }

      this.router.navigate(['distrito']);
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
          ciudad: new FormControl(data.ciudad),
        });
      });
    }
  }
}
