import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ArrendadorService } from 'src/app/service/arrendador.service';

@Component({
  selector: 'app-arrendador-dialogo',
  templateUrl: './arrendador-dialogo.component.html',
  styleUrls: ['./arrendador-dialogo.component.css']
})
export class ArrendadorDialogoComponent implements OnInit {
  constructor(private As: ArrendadorService,
    private dialogRef: MatDialogRef<ArrendadorDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.As.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
