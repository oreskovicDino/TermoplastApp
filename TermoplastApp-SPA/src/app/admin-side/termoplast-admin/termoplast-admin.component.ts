import { Posts } from './../../_models/posts';
import { Admin } from './../../_models/admin';
import { ActivatedRoute } from '@angular/router';
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
  admins: Admin[];
  posts: Posts[];

  constructor(private http: HttpClient, private authService: AuthService, private alertify: AlertifyService,
    private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUsers();
    this.loadAdmins();
    this.loadPosts();
  }

  loadUsers() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  loadPosts() {
    this.route.data.subscribe(data => {
      this.posts = data['posts'];
    });
  }

  loadAdmins() {
    this.route.data.subscribe(data => {
      this.admins = data['admins'];
    });
  }


}
