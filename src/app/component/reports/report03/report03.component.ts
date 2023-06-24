import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { estudiante } from 'src/app/model/estudiante';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-report03',
  templateUrl: './report03.component.html',
  styleUrls: ['./report03.component.css']
})
export class Report03Component implements OnInit{
  dataSource: MatTableDataSource<estudiante> = new MatTableDataSource();
  lista: estudiante[] = [];
  form: FormGroup = new FormGroup({});
  email:string=""
  displayedColumns: string[] = ['numero', 'Nombre', 'Correo Institucional', 'Fecha de Nacimiento','Telefono',];
  constructor(private eS: EstudianteService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.eS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.form = new FormGroup({
      email1: new FormControl()
    });
  }

  limpiar(): void {
    this.form.reset();
    this.buscar();
  }

  buscar(): void {
   this.email = this.form.value['email1'];

  if (this.email) {
    this.eS.findByEmail(this.email).subscribe((data) => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  } else {
    // Si el campo de correo electrónico está vacío, muestra todos los estudiantes
    this.eS.list().subscribe((data) => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
}
