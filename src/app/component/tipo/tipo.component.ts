import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {

  }
}
