import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Ciudad } from 'src/app/model/ciudad';
import { CiudadService } from 'src/app/service/ciudad.service';
import { CiudadEliminarComponent } from './ciudad-eliminar/ciudad-eliminar.component';
import { LoginService } from 'src/app/service/login.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-ciudad-listar',
  templateUrl: './ciudad-listar.component.html',
  styleUrls: ['./ciudad-listar.component.css'],
})
export class CiudadListarComponent implements OnInit {
  role: string = '';
  dataSource: MatTableDataSource<Ciudad> = new MatTableDataSource();
  lista: Ciudad[] = [];
  displayedColumns: string[] = [
    'id',
    'nombre',
    'pais',
    'actualizar',
    'eliminar',
  ];

  //para el eliminar
  private idMayor: number = 0;
  constructor(
    private cS: CiudadService,
    private dialog: MatDialog,
    private ls: LoginService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.role = this.ls.showRole();
    console.log(this.role);

    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.cS.getlist().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    //agregar para eliminar
    this.cS.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  //para el eliminar
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CiudadEliminarComponent);
  }
  eliminar(id: number) {
    this.cS.eliminar(id).subscribe(() => {
      this.cS.list().subscribe((data) => {
        this.cS.setlist(data);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}
