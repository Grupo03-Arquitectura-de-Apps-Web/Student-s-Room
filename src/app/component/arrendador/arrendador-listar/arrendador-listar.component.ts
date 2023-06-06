import { Component, OnInit,ViewChild } from '@angular/core';
import { Arrendador } from 'src/app/model/arrendador';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ArrendadorDialogoComponent } from './arrendador-dialogo/arrendador-dialogo.component';

@Component({
  selector: 'app-arrendador-listar',
  templateUrl: './arrendador-listar.component.html',
  styleUrls: ['./arrendador-listar.component.css']
})
export class ArrendadorListarComponent implements OnInit {
  dataSource: MatTableDataSource<Arrendador> = new MatTableDataSource();
  lista: Arrendador[] = [];
  //colocar que atributos tiene la clase Arrendador para que se muestre

  //delete
  private idMayor: number = 0;
  //

  displayedColumns: string[] = [
    'id',
    'nombreArrendador',
    'correoArrendador',
    'telefonoArrendador',
    'ciudadArrendador',
    'paisArrendador',
    'plan',
    'ceditar',
    'celiminar'
  ];
  constructor(private ArrendadorS: ArrendadorService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.ArrendadorS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.ArrendadorS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    //para el delete
    this.ArrendadorS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //funciona para filtrar
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  ///funciones para eliminar
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ArrendadorDialogoComponent);
  }
  eliminar(id: number) {
    this.ArrendadorS.eliminar(id).subscribe(() => {
      this.ArrendadorS.list().subscribe((data) => {
        this.ArrendadorS.setList(data); /* se ejecuta la línea 27 */
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}
