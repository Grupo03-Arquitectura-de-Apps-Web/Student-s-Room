import { Component,OnInit, ViewChild} from '@angular/core';
import { Mensaje } from 'src/app/model/mensaje';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MensajeService } from 'src/app/service/mensaje.service';
import { MensajeDialogoComponent } from './mensaje-dialogo/mensaje-dialogo.component';

@Component({
  selector: 'app-mensaje-listar',
  templateUrl: './mensaje-listar.component.html',
  styleUrls: ['./mensaje-listar.component.css']
})
export class MensajeListarComponent implements OnInit {
  dataSource: MatTableDataSource<Mensaje> = new MatTableDataSource();
  lista: Mensaje[] = [];
  displayedColumns: string[] = [
    'numero',
    'descripcion',
    'fecha_envio',
    'fecha_recepcion',
    'tiempo_respuesta',
    'estado',
    'arrendador',
    'estudiante',
    'actualizar',
    'eliminar',
  ];
  private idMayor: number = 0;

  constructor(private Ms: MensajeService, private dialog: MatDialog) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.Ms.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.Ms.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.Ms.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(MensajeDialogoComponent);
  }
  eliminar(id: number) {
    this.Ms.eliminar(id).subscribe(() => {
      this.Ms.list().subscribe((data) => {
        this.Ms.setList(data); /* se ejecuta la línea 27 */
        this.dataSource.paginator = this.paginator;
      });
    });
  }
  //
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
