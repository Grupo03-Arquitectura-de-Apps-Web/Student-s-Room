import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contratodealquiler',
  templateUrl: './contratodealquiler.component.html',
  styleUrls: ['./contratodealquiler.component.css']
})
export class ContratodealquilerComponent implements OnInit {
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
}
