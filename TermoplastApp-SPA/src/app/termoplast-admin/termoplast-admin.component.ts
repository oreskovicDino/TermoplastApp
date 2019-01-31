import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termoplast-admin',
  templateUrl: './termoplast-admin.component.html',
  styleUrls: ['./termoplast-admin.component.css']
})
export class TermoplastAdminComponent implements OnInit {
  values: any;
  model: any = {};

  constructor(private http: HttpClient, private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getValues();
  }

  loggedIn() {
    return this.authService.loggedin();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
