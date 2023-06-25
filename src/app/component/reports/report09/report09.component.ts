import { Component,OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { PlanService } from 'src/app/service/plan.service';
import { ArrendadorPorPlanDTO } from 'src/app/model/ArrendadorPorPlanDTO';

@Component({
  selector: 'app-report09',
  templateUrl: './report09.component.html',
  styleUrls: ['./report09.component.css']
})
export class Report09Component{
  AxP: ArrendadorPorPlanDTO[] = [];
  dataSource: MatTableDataSource<ArrendadorPorPlanDTO> = new MatTableDataSource();
  displayedColumns: string[] = [
    'nombre_plan',
    'precio',
    'arrendadores'
  ];

  constructor(private pS:PlanService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.pS.ArrendadorPorPlan().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ArrendadorPorPlan(): void {
    this.pS.ArrendadorPorPlan()
      .subscribe((data: ArrendadorPorPlanDTO[]) => {
        this.AxP = data;
      });
  }
}
