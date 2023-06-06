import { Component, OnInit, ViewChild } from '@angular/core';
import { Publicacionfavorita } from 'src/app/model/publicacionfavorita';
import { PublicacionfavoritaService } from 'src/app/service/publicacionfavorita.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PublicacionfavoritaDialogoComponent } from './publicacionfavorita-dialogo/publicacionfavorita-dialogo.component';
@Component({
  selector: 'app-publicacionfavorita-listar',
  templateUrl: './publicacionfavorita-listar.component.html',
  styleUrls: ['./publicacionfavorita-listar.component.css']
})
export class PublicacionfavoritaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Publicacionfavorita> = new MatTableDataSource();
  lista: Publicacionfavorita[] = [];
  //colocar que atributos tiene la clase Publicacionfavorita para que se muestre

  //delete
  private idMayor: number = 0;
  //

  displayedColumns: string[] = [
    'id',
    'fechaguardado',
    'estudiante',
    'publicacion',
    'ceditar',
    'celiminar'
  ];
  constructor(private PublicacionfavoritaS: PublicacionfavoritaService, private dialog: MatDialog) {}


  ngOnInit(): void {
    this.PublicacionfavoritaS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.PublicacionfavoritaS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    //para el delete
    this.PublicacionfavoritaS.getConfirmaEliminacion().subscribe(data => {
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
    this.dialog.open(PublicacionfavoritaDialogoComponent);
  }
  eliminar(id: number) {
    this.PublicacionfavoritaS.eliminar(id).subscribe(() => {
      this.PublicacionfavoritaS.list().subscribe((data) => {
        this.PublicacionfavoritaS.setList(data); /* se ejecuta la línea 27 */
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}
