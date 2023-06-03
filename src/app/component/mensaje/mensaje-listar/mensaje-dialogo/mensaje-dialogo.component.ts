import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MensajeService } from 'src/app/service/mensaje.service';

@Component({
  selector: 'app-mensaje-dialogo',
  templateUrl: './mensaje-dialogo.component.html',
  styleUrls: ['./mensaje-dialogo.component.css']
})
export class MensajeDialogoComponent implements OnInit {
  constructor(private Ms: MensajeService,
    private dialogRef: MatDialogRef<MensajeDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.Ms.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
