import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContratodealquilerService } from 'src/app/service/contratodealquiler.service';

@Component({
  selector: 'app-contratodealquiler-eliminar',
  templateUrl: './contratodealquiler-eliminar.component.html',
  styleUrls: ['./contratodealquiler-eliminar.component.css']
})
export class ContratodealquilerEliminarComponent {
  constructor(private pS: ContratodealquilerService,
    private dialogRef: MatDialogRef<ContratodealquilerEliminarComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
