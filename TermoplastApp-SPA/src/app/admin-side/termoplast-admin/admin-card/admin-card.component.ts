import { AlertifyService } from './../../../_services/alertify.service';
import { AuthService } from './../../../_services/auth.service';
import { Admin } from './../../../_models/admin';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.css']
})
export class AdminCardComponent implements OnInit {
  @Input() admins: Admin[];
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {

  }
  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Administrator je uspješno registriran');
    }, error => {
      this.alertify.error(error);
    });
  }

 

}
