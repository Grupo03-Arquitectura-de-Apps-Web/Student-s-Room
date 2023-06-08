import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HabitacionService } from 'src/app/service/habitacion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-habitacion-eliminar',
  templateUrl: './habitacion-eliminar.component.html',
  styleUrls: ['./habitacion-eliminar.component.css'],
})
export class HabitacionEliminarComponent implements OnInit {
  constructor(
    private Hs: HabitacionService,
    private dialogRef: MatDialogRef<HabitacionEliminarComponent>
  ) {}
  ngOnInit(): void {}
  confirmar(estado: boolean) {
    this.Hs.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
