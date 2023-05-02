import { Component, OnInit } from '@angular/core';
import { tipo } from 'src/app/model/tipo';
import { TipoService } from 'src/app/service/tipo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tipo-insertar',
  templateUrl: './tipo-insertar.component.html',
  styleUrls: ['./tipo-insertar.component.css'],
})
export class TipoInsertarComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;

  form: FormGroup = new FormGroup({});
  tipo: tipo = new tipo();
  mensaje: string = '';

  constructor(
    private tS: TipoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']
      this.edicion = data['id'] != null
      this.init();
    })

    this.form = new FormGroup({
      id: new FormControl(),
      tipo: new FormControl(),
      descripcion: new FormControl(),
    });
  }

  aceptar(): void {
    this.tipo.id = this.form.value['id'];
    this.tipo.tipo = this.form.value['tipo'];
    this.tipo.descripcion = this.form.value['descripcion'];

    if(!this.form.valid){
      return;
    }

    if (this.form.value['tipo'].length > 0) {
      if (this.edicion) {
        //guardar lo actualizado
        this.tS.update(this.tipo).subscribe(() => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
        //
      } else {
        this.tS.insert(this.tipo).subscribe((data) => {
          this.tS.list().subscribe((data) => {
            this.tS.setList(data);
          });
        });
      }

      this.router.navigate(['tipo']);
    }else {
      this.mensaje = 'Ingrese todos los datos!!';
    }
  }
  init(){
    if(this.edicion){
      this.tS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id: new FormControl(data.id),
          tipo: new FormControl(data.tipo),
          descripcion: new FormControl(data.descripcion)
        });
      });
    }
  }
}


