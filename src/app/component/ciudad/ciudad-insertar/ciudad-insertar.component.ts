import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ciudad } from 'src/app/model/ciudad';
import { Pais } from 'src/app/model/pais';
import { CiudadService } from 'src/app/service/ciudad.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-ciudad-insertar',
  templateUrl: './ciudad-insertar.component.html',
  styleUrls: ['./ciudad-insertar.component.css'],
})
export class CiudadInsertarComponent {
  id: number = 0;
  edicion: boolean = false;

  //Agregamos lo siguiente
  form: FormGroup = new FormGroup({});
  ciudad: Ciudad = new Ciudad();
  mensaje: string = '';

  //Pais
  lista_p: Pais[] = [];
  idPaisSeleccionado: number = 0;

  //agregamos el constructor
  constructor(
    private cS: CiudadService,
    private router: Router,
    private route: ActivatedRoute,
    private pS: PaisService
  ) {}

  //agregamos el ngOninit
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.lista_p = data;
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      pais: new FormControl(),
    });
  }
  aceptar(): void {
    this.ciudad.idCiudad = this.form.value['id'];
    this.ciudad.nombreCiudad = this.form.value['nombreCiudad'];
    this.ciudad.pais.idPais = this.form.value['pais'];

    if (!this.form.valid) {
      return;
    }

    if (this.idPaisSeleccionado > 0) {
      if (this.edicion) {
        //guardar lo actualizado
        this.cS.update(this.ciudad).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setlist(data);
          });
        });
        //
      } else {
        let p = new Pais();
        p.idPais = this.idPaisSeleccionado;
        this.ciudad.pais = p;

        this.cS.insertar(this.ciudad).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setlist(data);
          });
        });
      }

      this.router.navigate(['pages/ciudad']);
    } else {
      this.mensaje = 'Ingrese todos los datos';
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.idCiudad),
          nombre: new FormControl(data.nombreCiudad),
          pais: new FormControl(data.pais),
        });
      });
    }
  }
}
