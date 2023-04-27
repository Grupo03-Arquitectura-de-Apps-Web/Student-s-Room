import { Component,OnInit } from '@angular/core';
import { UniversidadService } from 'src/app/service/universidad.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-universidad-dialogo',
  templateUrl: './universidad-dialogo.component.html',
  styleUrls: ['./universidad-dialogo.component.css']
})
export class UniversidadDialogoComponent implements OnInit {
  constructor(private pS: UniversidadService,
    private dialogRef: MatDialogRef<UniversidadDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
