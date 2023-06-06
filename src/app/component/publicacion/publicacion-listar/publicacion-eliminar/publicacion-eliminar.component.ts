import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PublicacionService } from 'src/app/service/publicacion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-publicacion-eliminar',
  templateUrl: './publicacion-eliminar.component.html',
  styleUrls: ['./publicacion-eliminar.component.css']
})
export class PublicacionEliminarComponent implements OnInit{
  constructor(private Ps: PublicacionService,
    private dialogRef: MatDialogRef<PublicacionEliminarComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.Ps.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
