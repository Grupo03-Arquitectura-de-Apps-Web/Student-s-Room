import { Component, OnInit,ViewChild } from '@angular/core';
import { ClientesDeArrendador } from 'src/app/model/ClientesDeArrendador';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';import { ContratodealquilerService } from 'src/app/service/contratodealquiler.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-report06',
  templateUrl: './report06.component.html',
  styleUrls: ['./report06.component.css']
})
export class Report06Component implements OnInit {
  role:string="";
  dataSource: MatTableDataSource<ClientesDeArrendador> = new MatTableDataSource();
  lista: ClientesDeArrendador[]=[];
  displayedColumns: string[]=['arrendador','nombre','telefono','ubicacion'];
  constructor(private cS:ContratodealquilerService, private dialog: MatDialog,    private aS: ArrendadorService, private ls:LoginService){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.cS.ClientesDeArrendador().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  ClientesDeArrendador():void{
    this.cS.ClientesDeArrendador().subscribe((data: ClientesDeArrendador[]) => {
      this.lista = data;
    });
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
