import { UniversidadService } from './../../../service/universidad.service';
import { Universidad } from 'src/app/model/universidad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UniversidadDialogoComponent } from './universidad-dialogo/universidad-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-universidad-listar',
  templateUrl: './universidad-listar.component.html',
  styleUrls: ['./universidad-listar.component.css'],
})
export class UniversidadListarComponent implements OnInit {
  role: string = '';
  dataSource: MatTableDataSource<Universidad> = new MatTableDataSource();
  lista: Universidad[] = [];
  displayedColumns: string[] = [
    'ID',
    'Nombre',
    'Sede',
    'Ubicacion',
    'ceditar',
    'celiminar',
  ];
  private idMayor: number = 0;

  constructor(
    private pS: UniversidadService,
    private dialog: MatDialog,
    private ls: LoginService
  ) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.role = this.ls.showRole();
    console.log(this.role);
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(UniversidadDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
