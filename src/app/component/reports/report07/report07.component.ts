import { Component, ViewChild, OnInit } from '@angular/core';
import { cantidadPorUniversidadDTO } from 'src/app/model/cantidadPorUniversidadDTO';
import { MatTableDataSource } from '@angular/material/table';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-report07',
  templateUrl: './report07.component.html',
  styleUrls: ['./report07.component.css'],
})
export class Report07Component {
  avaCounts: cantidadPorUniversidadDTO[] = [];
  dataSource: MatTableDataSource<cantidadPorUniversidadDTO> =
    new MatTableDataSource();

  displayedColumns: string[] = ['universidad', 'cantidad'];

  constructor(private hS: HabitacionService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.hS.quantityByUniversity().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  quantityByUniversity(): void {
    this.hS
      .quantityByUniversity()
      .subscribe((data: cantidadPorUniversidadDTO[]) => {
        this.avaCounts = data;
      });
  }
}
