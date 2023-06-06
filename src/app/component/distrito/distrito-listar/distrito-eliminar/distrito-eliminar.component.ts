import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/service/distrito.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-distrito-eliminar',
  templateUrl: './distrito-eliminar.component.html',
  styleUrls: ['./distrito-eliminar.component.css']
})
export class DistritoEliminarComponent implements OnInit{
  constructor(private Ps: DistritoService,
    private dialogRef: MatDialogRef<DistritoEliminarComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.Ps.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
