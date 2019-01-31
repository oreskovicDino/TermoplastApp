import { Router } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Odjavljeni ste');
    this.router.navigate(['/login']);
  }
  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Administrator je uspješno registriran');
    }, error => {
      this.alertify.error(error);
    });
  }
}
