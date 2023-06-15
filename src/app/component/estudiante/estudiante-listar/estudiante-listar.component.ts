import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { estudiante } from 'src/app/model/estudiante';
import { EstudianteEliminarComponent } from '../estudiante-eliminar/estudiante-eliminar.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit {
  role:string="";
  dataSource: MatTableDataSource<estudiante> = new MatTableDataSource();
  lista: estudiante[] = [];
  displayedColumns: string[] = ['numero', 'Nombre', 'Correo Institucional', 'Fecha de Nacimiento','Telefono','ceditar','celiminar',];
  private idMayor: number = 0;


  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

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

  constructor(private pS: EstudianteService, private dialog: MatDialog, private ls:LoginService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  //para el eliminar
  confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(EstudianteEliminarComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setlist(data);/* se ejecuta la línea 27 */
        this.dataSource.paginator = this.paginator;
      });
    });
  }

}
