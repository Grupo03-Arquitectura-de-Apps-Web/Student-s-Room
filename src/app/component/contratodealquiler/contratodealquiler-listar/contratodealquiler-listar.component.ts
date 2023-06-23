import { Component, OnInit, ViewChild } from '@angular/core';

import { ContratodealquilerService } from 'src/app/service/contratodealquiler.service';
import { contratodealquiler } from 'src/app/model/contratodealquier';
import { ContratodealquilerEliminarComponent } from '../contratodealquiler-eliminar/contratodealquiler-eliminar.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-contratodealquiler-listar',
  templateUrl: './contratodealquiler-listar.component.html',
  styleUrls: ['./contratodealquiler-listar.component.css']
})
export class ContratodealquilerListarComponent implements OnInit{
  dataSource: MatTableDataSource<contratodealquiler> = new MatTableDataSource();
  lista: contratodealquiler[] = [];
  displayedColumns: string[] = ['numero','Estudiante','Habitacion','ceditar','onlyread','celiminar'];

  //para el eliminar
  private idMayor: number = 0;

  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getlist().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    //agregar para eliminar
    this.pS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  constructor(private pS: ContratodealquilerService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  //para el eliminar
  confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(ContratodealquilerEliminarComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setlist(data);
        this.dataSource.paginator = this.paginator;
      });
    });
  }


}
