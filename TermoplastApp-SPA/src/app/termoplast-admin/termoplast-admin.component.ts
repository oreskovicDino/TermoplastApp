import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termoplast-admin',
  templateUrl: './termoplast-admin.component.html',
  styleUrls: ['./termoplast-admin.component.css']
})
export class TermoplastAdminComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
