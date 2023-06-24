import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { habitacion } from 'src/app/model/habitacion';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-report02',
  templateUrl: './report02.component.html',
  styleUrls: ['./report02.component.css']
})
export class Report02Component implements OnInit {
  dataSource: MatTableDataSource<habitacion> = new MatTableDataSource();
  lista: habitacion[] = [];
  form: FormGroup = new FormGroup({});
  p1:number=0;
  p2:number=0;
  displayedColumns: string[] = [
    'id',
    'tipo',
    'precio',
    'disponibilidad',
    'arrendador',
    'distrito',
    'universidad'
  ];

  constructor(private hS: HabitacionService, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.hS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.form = new FormGroup({
      price1: new FormControl(),
      price2: new FormControl()
    });
  }
  nuevo():void{
    this.hS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.form = new FormGroup({
      price1: new FormControl(),
      price2: new FormControl()
    });
  }
  buscar():void{
    this.p1 = parseFloat(this.form.value['price1']);
    this.p2 = parseFloat(this.form.value['price2']);
    if(!this.form.valid){
      return;
    }
    if(!(this.p1>0 &&this.p2>0) ||!(this.p1!=null &&this.p2!=null)){
      return;
    }
    this.hS.searchByPrice(this.p1,this.p2).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
