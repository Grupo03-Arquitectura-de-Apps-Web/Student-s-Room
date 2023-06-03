import { Component,OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MensajeDialogoComponent } from 'src/app/component/mensaje/mensaje-listar/mensaje-dialogo/mensaje-dialogo.component';
import { MensajeService } from 'src/app/service/mensaje.service';
@Component({
  selector: 'app-plan-dialogo',
  templateUrl: './plan-dialogo.component.html',
  styleUrls: ['./plan-dialogo.component.css'],
})
export class PlanDialogoComponent implements OnInit {
  constructor(private Ps: MensajeService,
    private dialogRef: MatDialogRef<MensajeDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.Ps.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
