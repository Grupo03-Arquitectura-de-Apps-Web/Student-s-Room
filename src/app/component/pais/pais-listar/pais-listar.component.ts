import { PaisService } from './../../../service/pais.service';
import { Pais } from './../../../model/pais';
import { Component, OnInit } from '@angular/core';
//
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

//delete
import { PaisDialogoComponent } from './pais-dialogo/pais-dialogo.component';
@Component({
  selector: 'app-pais-listar',
  templateUrl: './pais-listar.component.html',
  styleUrls: ['./pais-listar.component.css'],
})
export class PaisListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pais> = new MatTableDataSource();
  lista: Pais[] = [];
  //colocar que atributos tiene la clase Pais para que se muestre

  //delete
  private idMayor: number = 0;
  //

  displayedColumns: string[] = [
    'id',
    'nombrePais',
    'capitalPais',
    'monedaPais',
    'ceditar',
    'celiminar'
  ];
  constructor(private paisS: PaisService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.paisS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.paisS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    //para el delete
    this.paisS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  //funciona para filtrar
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  ///funciones para eliminar
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PaisDialogoComponent);
  }
  eliminar(id: number) {
    this.paisS.eliminar(id).subscribe(() => {
      this.paisS.list().subscribe((data) => {
        this.paisS.setList(data); /* se ejecuta la línea 27 */
      });
    });
  }
}
