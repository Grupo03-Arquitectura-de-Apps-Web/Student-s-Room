import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css'],
})
export class HabitacionComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
