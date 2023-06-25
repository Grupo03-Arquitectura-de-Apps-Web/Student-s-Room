import { Component, ViewChild } from '@angular/core';
import { mensajesDTO } from 'src/app/model/mensajesDTO';
import { MatTableDataSource } from '@angular/material/table'
import { MensajeService } from 'src/app/service/mensaje.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-report05',
  templateUrl: './report05.component.html',
  styleUrls: ['./report05.component.css']
})
export class Report05Component {
   mensaje: mensajesDTO[]=[];
   dataSource: MatTableDataSource<mensajesDTO> = new MatTableDataSource();
   displayedColumns: string[] = ['estado','conteo']
   constructor(private mS:MensajeService){}

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   ngOnInit(): void {
    this.mS.ConteodeMensajesporEstado().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ConteodeMensajesporEstado(): void {
    this.mS.ConteodeMensajesporEstado()
    .subscribe((data: mensajesDTO[]) => {
      this.mensaje = data;
    });
  }
}
