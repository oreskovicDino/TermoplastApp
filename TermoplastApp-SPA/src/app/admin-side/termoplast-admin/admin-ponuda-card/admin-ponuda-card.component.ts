import { User } from './../../../_models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-ponuda-card',
  templateUrl: './admin-ponuda-card.component.html',
  styleUrls: ['./admin-ponuda-card.component.css']
})
export class AdminPonudaCardComponent implements OnInit {
  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }

}
