import { Component, OnInit } from '@angular/core';
import { PublicacionfavoritaService } from 'src/app/service/publicacionfavorita.service';

import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-publicacionfavorita-dialogo',
  templateUrl: './publicacionfavorita-dialogo.component.html',
  styleUrls: ['./publicacionfavorita-dialogo.component.css']
})
export class PublicacionfavoritaDialogoComponent implements OnInit{
  constructor(private pS: PublicacionfavoritaService,
    private dialogRef: MatDialogRef<PublicacionfavoritaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.pS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
