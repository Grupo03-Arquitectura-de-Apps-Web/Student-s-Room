import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-publicacionfavorita',
  templateUrl: './publicacionfavorita.component.html',
  styleUrls: ['./publicacionfavorita.component.css']
})
export class PublicacionfavoritaComponent implements OnInit {
  constructor(public route:ActivatedRoute){

  }
  ngOnInit():void{

  }
}
