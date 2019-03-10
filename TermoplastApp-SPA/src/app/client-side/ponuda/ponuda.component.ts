import { User } from './../../_models/user';
import { Router } from '@angular/router';
import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  @ViewChild('addUserForm') addUserForm: NgForm;
  user: any = {};
  constructor(private userService: UserService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(userA => {
      this.alertify.success('Uspješno dodano');
      this.route.navigateByUrl('/ponuda/' + userA.id);
    }, error => {
      this.alertify.error(error);
    });
  }

}
