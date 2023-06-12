import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-arrendador',
  templateUrl: './arrendador.component.html',
  styleUrls: ['./arrendador.component.css']
})
export class ArrendadorComponent implements OnInit {

  constructor(public route:ActivatedRoute){

  }
  ngOnInit():void{
    document.getElementById("home-tool")!.removeAttribute("hidden");
  }
}
