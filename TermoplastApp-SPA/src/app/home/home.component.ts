import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude = 45.550021;
  longitude = 18.704480;

  constructor() { }

  ngOnInit() {
  }

}
