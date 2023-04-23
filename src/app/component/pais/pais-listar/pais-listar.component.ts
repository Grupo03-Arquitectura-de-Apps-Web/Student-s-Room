import { PaisService } from './../../../service/pais.service';
import { Pais } from './../../../model/pais';
import { Component, OnInit } from '@angular/core';
//

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-pais-listar',
  templateUrl: './pais-listar.component.html',
  styleUrls: ['./pais-listar.component.css'],
})
export class PaisListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pais> = new MatTableDataSource();
  lista: Pais[] = [];
  //colocar que atributos tiene la clase Pais para que se muestre
  displayedColumns: string[] = [
    'id',
    'nombrePais',
    'capitalPais',
    'monedaPais',
    'ceditar',
  ];
  constructor(private paisS: PaisService) {}

  ngOnInit(): void {
    this.paisS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.paisS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  //funciona para filtrar
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
