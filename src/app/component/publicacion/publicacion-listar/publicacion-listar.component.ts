import { Component,OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Publicacion } from 'src/app/model/publicacion';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { PublicacionEliminarComponent } from './publicacion-eliminar/publicacion-eliminar.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-publicacion-listar',
  templateUrl: './publicacion-listar.component.html',
  styleUrls: ['./publicacion-listar.component.css']
})
export class PublicacionListarComponent implements OnInit {
  role: string = '';
  dataSource: MatTableDataSource<Publicacion> = new MatTableDataSource();
  lista: Publicacion[] = [];
  //para el eliminar
  private idMayor: number = 0;
  constructor(private pS: PublicacionService, private dialog: MatDialog,private ls: LoginService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.role = this.ls.showRole();
    console.log(this.role);
    this.pS.list().subscribe((data) => {
      this.lista = data;
      this.dataSource = new MatTableDataSource<Publicacion>(this.lista);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getlist().subscribe((data) => {
      this.lista = data;
      this.dataSource = new MatTableDataSource<Publicacion>(this.lista);
      this.dataSource.paginator = this.paginator;
    });

    // agregar para eliminar
    this.pS.getConfirmaEliminacion().subscribe(data => {
      if (data) {
        this.eliminar(this.idMayor);
      }
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
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.data = this.lista.slice(startIndex, endIndex);
  }

}
