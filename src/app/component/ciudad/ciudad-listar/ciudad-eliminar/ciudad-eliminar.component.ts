import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CiudadService } from 'src/app/service/ciudad.service';

@Component({
  selector: 'app-ciudad-eliminar',
  templateUrl: './ciudad-eliminar.component.html',
  styleUrls: ['./ciudad-eliminar.component.css']
})
export class CiudadEliminarComponent implements OnInit {
  constructor(private Ps: CiudadService,
    private dialogRef: MatDialogRef<CiudadEliminarComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.Ps.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
