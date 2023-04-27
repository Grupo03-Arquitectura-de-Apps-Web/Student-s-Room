import { Component, OnInit } from '@angular/core';
import { tipo } from 'src/app/model/tipo';
import { TipoService } from 'src/app/service/tipo.service';
import { MatTableDataSource } from '@angular/material/table';
import { TipoEliminarComponent } from './tipo-eliminar/tipo-eliminar.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-tipo-listar',
  templateUrl: './tipo-listar.component.html',
  styleUrls: ['./tipo-listar.component.css'],
})
export class TipoListarComponent implements OnInit {
  dataSource: MatTableDataSource<tipo> = new MatTableDataSource();
  lista: tipo[] = [];
  displayedColumns: string[] = [
    'id',
    'tipo',
    'descripcion',
    'ceditar',
    'celiminar',
  ];
  private idMayor: number = 0;

  constructor(private tS: TipoService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.tS.getConfirmaEliminacion().subscribe((data)=>{
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(TipoEliminarComponent);
  }
  eliminar(id: number) {
    this.tS.eliminar(id).subscribe(() => {
      this.tS.list().subscribe(data => {
        this.tS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }

  filtrar(e:any){
    this.dataSource.filter= e.target.value.trim();
  }
}
