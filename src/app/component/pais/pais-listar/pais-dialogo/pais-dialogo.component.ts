import { Component, OnInit} from '@angular/core';

//
import { PaisService } from 'src/app/service/pais.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pais-dialogo',
  templateUrl: './pais-dialogo.component.html',
  styleUrls: ['./pais-dialogo.component.css']
})
export class PaisDialogoComponent implements OnInit {
  constructor(private paisS: PaisService,
    private dialogRef: MatDialogRef<PaisDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.paisS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
