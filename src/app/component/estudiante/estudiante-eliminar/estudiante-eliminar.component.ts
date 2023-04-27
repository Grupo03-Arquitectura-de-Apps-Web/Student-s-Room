import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-estudiante-eliminar',
  templateUrl: './estudiante-eliminar.component.html',
  styleUrls: ['./estudiante-eliminar.component.css']
})
export class EstudianteEliminarComponent {
  constructor(private pS: EstudianteService,
    private dialogRef: MatDialogRef<EstudianteEliminarComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
