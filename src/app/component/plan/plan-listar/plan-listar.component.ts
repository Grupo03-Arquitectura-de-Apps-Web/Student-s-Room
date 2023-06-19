import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import { MatDialog } from '@angular/material/dialog';
import { PlanDialogoComponent } from './plan-dialogo/plan-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-plan-listar',
  templateUrl: './plan-listar.component.html',
  styleUrls: ['./plan-listar.component.css'],
})
export class PlanListarComponent implements OnInit {
  role:string="";
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

  constructor(private Ps: PlanService, private dialog: MatDialog, private ls:LoginService) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);

    this.Ps.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.Ps.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
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
        this.dataSource.paginator = this.paginator;
      });
    });
  }
  //
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
