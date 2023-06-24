import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { habitacion } from 'src/app/model/habitacion';
import { HabitacionEliminarComponent } from './habitacion-eliminar/habitacion-eliminar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-habitacion-listar',
  templateUrl: './habitacion-listar.component.html',
  styleUrls: ['./habitacion-listar.component.css'],
})
export class HabitacionListarComponent implements OnInit {
  role: string = '';
  dataSource: MatTableDataSource<habitacion> = new MatTableDataSource();
  lista: habitacion[] = [];
  displayedColumns: string[] = [
    'id',
    'tipo',
    'precio',
    'disponibilidad',
    'arrendador',
    'distrito',
    'ubicacion',
    'universidad',
    'actualizar',
    'eliminar',
  ];

  //para el eliminar
  private idMayor: number = 0;
  constructor(
    private hS: HabitacionService,
    private dialog: MatDialog,
    private ls: LoginService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.role = this.ls.showRole();
    console.log(this.role);

    this.hS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.hS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    //agregar para eliminar
    this.hS.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  //para el eliminar
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(HabitacionEliminarComponent);
  }
  eliminar(id: number) {
    this.hS.eliminar(id).subscribe(() => {
      this.hS.list().subscribe((data) => {
        this.hS.setList(data);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}
