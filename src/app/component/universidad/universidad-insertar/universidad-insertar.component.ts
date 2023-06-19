import { Component, OnInit } from '@angular/core';
import { Universidad } from 'src/app/model/universidad';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-universidad-insertar',
  templateUrl: './universidad-insertar.component.html',
  styleUrls: ['./universidad-insertar.component.css'],
})
export class UniversidadInsertarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  universidad: Universidad = new Universidad();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  constructor(
    private pS: UniversidadService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      sede: new FormControl(),
      ubicacion: new FormControl(),
    });
  }
  aceptar(): void {
    this.universidad.idUniversidad = this.form.value['id'];
    this.universidad.nombre = this.form.value['nombre'];
    this.universidad.sede = this.form.value['sede'];
    this.universidad.ubicacion = this.form.value['ubicacion'];

    if (!this.form.valid) {
      return;
    }

    if (this.form.value['nombre'].length > 0) {
      if (this.edicion) {
        this.pS.update(this.universidad).subscribe(() => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      } else {
        this.pS.insert(this.universidad).subscribe((data) => {
          this.pS.list().subscribe((data) => {
            this.pS.setList(data);
          });
        });
      }
      this.router.navigate(['pages/universidad']);
    } else {
      this.mensaje = 'Ingrese el nombre de la universidad:';
    }
  }
  init() {
    if (this.edicion) {
      this.pS.listID(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idUniversidad),
          nombre: new FormControl(data.nombre),
          sede: new FormControl(data.sede),
          ubicacion: new FormControl(data.ubicacion),
        });
        console.log(data);
      });
    }
  }
}
