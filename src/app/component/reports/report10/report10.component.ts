import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';;
import { ContratodealquilerService } from 'src/app/service/contratodealquiler.service';
import { contratodealquiler } from 'src/app/model/contratodealquier';

@Component({
  selector: 'app-report10',
  templateUrl: './report10.component.html',
  styleUrls: ['./report10.component.css'],
})
export class Report10Component implements OnInit {
  dataSource: MatTableDataSource<contratodealquiler> = new MatTableDataSource();
  lista: contratodealquiler[] = [];
  form: FormGroup = new FormGroup({});
  f1: Date;
  f2: Date;
  displayedColumns: string[] = [
    'id',
    'descripcion',
    'fecha_inicio',
    'fecha_pago',
    'fecha_vencimiento',
    'money',
    'estudiante',
    'habitacion',
  ];

  constructor(
    private cS: ContratodealquilerService, private dialog: MatDialog
  ) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.form = new FormGroup({
      f1Control: new FormControl(),
      f2Control: new FormControl(),
    });
  }

    searchByDate(): void {
    this.f1 = this.form.value['f1Control'];
    this.f2 = this.form.value['f2Control'];
    if(!this.form.valid){
      return;
    }
    if(!(this.f1!=null &&this.f2!=null)){
      return;
    }
    this.cS.searchByDate(this.f1, this.f2).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
