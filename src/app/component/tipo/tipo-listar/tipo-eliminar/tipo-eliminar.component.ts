import { Component, OnInit } from '@angular/core';
import { TipoService } from 'src/app/service/tipo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-eliminar',
  templateUrl: './tipo-eliminar.component.html',
  styleUrls: ['./tipo-eliminar.component.css']
})
export class TipoEliminarComponent implements OnInit{
  constructor (private tS: TipoService,
    private dialogRef: MatDialogRef<TipoEliminarComponent>){}


  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.tS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
