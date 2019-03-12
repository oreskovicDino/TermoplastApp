import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})

export class KontaktComponent implements OnInit {
  latitude = 45.550021;
  longitude = 18.704480;

  constructor() { }

  ngOnInit() {
  }

}
