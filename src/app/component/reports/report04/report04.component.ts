import { Component,ViewChild } from '@angular/core';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { studentmessageDTO } from 'src/app/model/StudentMessageDTO';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-report04',
  templateUrl: './report04.component.html',
  styleUrls: ['./report04.component.css']
})
export class Report04Component {
  messagecount: studentmessageDTO[] = [];
  dataSource: MatTableDataSource<studentmessageDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['estudiante','cantidad']

  constructor(private eS: EstudianteService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.eS.getAverageMessagesPerStudent().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getAverageMessagesPerStudent(): void {
    this.eS.getAverageMessagesPerStudent()
      .subscribe((data: studentmessageDTO[]) => {
        this.messagecount = data;
      });
  }
}
