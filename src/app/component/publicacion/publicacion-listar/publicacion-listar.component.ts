import { Component,OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Publicacion } from 'src/app/model/publicacion';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { PublicacionEliminarComponent } from './publicacion-eliminar/publicacion-eliminar.component';

@Component({
  selector: 'app-publicacion-listar',
  templateUrl: './publicacion-listar.component.html',
  styleUrls: ['./publicacion-listar.component.css']
})
export class PublicacionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Publicacion> = new MatTableDataSource();
  lista: Publicacion[] = [];
  displayedColumns: string[] = ['id', 'contenido', 'fecha_publicacion', 'num_reacciones','num_comentarios','num_compartidos','habitacion','actualizar','eliminar'];

  //para el eliminar
  private idMayor: number = 0;
  constructor(private pS: PublicacionService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
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



  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  //para el eliminar
  confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(PublicacionEliminarComponent);
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
