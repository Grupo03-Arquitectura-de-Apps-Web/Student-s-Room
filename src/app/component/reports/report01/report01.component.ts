
import { Pais } from './../../../model/pais';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';
import { disponiblesDTO } from 'src/app/model/disponiblesDTO';
import { HabitacionService } from 'src/app/service/habitacion.service';

@Component({
  selector: 'app-report01',
  templateUrl: './report01.component.html',
  styleUrls: ['./report01.component.css']
})
export class Report01Component {
  avaCounts: disponiblesDTO[] = [];
  dataSource: MatTableDataSource<disponiblesDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['Ciudad','Distrito','Cantidad']

  constructor(private hS: HabitacionService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.hS.roomsAvailableBYcity().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  roomsAvailableBYcity(): void {
    this.hS.roomsAvailableBYcity()
      .subscribe((data: disponiblesDTO[]) => {
        this.avaCounts = data;
      });
  }

}
