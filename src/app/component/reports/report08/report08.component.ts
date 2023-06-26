import { Component, ViewChild } from '@angular/core';
import { universidadesPorDistritoDTO } from '../../../model/universidadesPorDistritoDTO';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DistritoService } from 'src/app/service/distrito.service';

@Component({
  selector: 'app-report08',
  templateUrl: './report08.component.html',
  styleUrls: ['./report08.component.css'],
})
export class Report08Component {
  cantidad_universidades: universidadesPorDistritoDTO[] = [];
  dataSource: MatTableDataSource<universidadesPorDistritoDTO> =
    new MatTableDataSource();

  displayedColumns: string[] = ['distrito', 'cantidad'];

  constructor(private dS: DistritoService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dS.quantityByDistrict().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  getQuantityByDistrict(): void {
    this.dS
      .quantityByDistrict()
      .subscribe((data: universidadesPorDistritoDTO[]) => {
        this.cantidad_universidades = data;
      });
  }
}
