import { AuthService } from '../../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';


@Component({
  selector: 'app-termoplast-admin',
  templateUrl: './termoplast-admin.component.html',
  styleUrls: ['./termoplast-admin.component.css']
})
export class TermoplastAdminComponent implements OnInit {
  model: any = {};
  users: User[];

  constructor(private http: HttpClient, private authService: AuthService, private alertify: AlertifyService,
    private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }


  loggedIn() {
    return this.authService.loggedin();
  }


}
