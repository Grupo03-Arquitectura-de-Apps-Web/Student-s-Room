import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PlanDialogoComponent } from './plan-dialogo/plan-dialogo.component';

@Component({
  selector: 'app-plan-listar',
  templateUrl: './plan-listar.component.html',
  styleUrls: ['./plan-listar.component.css']
})
export class PlanListarComponent implements OnInit {
  dataSource: MatTableDataSource<Plan> = new MatTableDataSource();
  lista: Plan[] = [];
  displayedColumns: string[] = [
    'numero',
    'nombre',
    'precio',
    'descripcion',
    'actualizar',
    'eliminar',
  ];
  private idMayor: number = 0;

  constructor(private Ps: PlanService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.Ps.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Ps.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Ps.getConfirmaEliminacion().subscribe((data) => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PlanDialogoComponent);
  }
  eliminar(id: number) {
    this.Ps.eliminar(id).subscribe(() => {
      this.Ps.list().subscribe((data) => {
        this.Ps.setList(data); /* se ejecuta la línea 27 */
      });
    });
  }
  //
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}

