import { User } from './../../_models/user';
import { Router } from '@angular/router';
import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  @ViewChild('addUserForm') addUserForm: NgForm;
  user: User;
  addForm: FormGroup;
  constructor(private userService: UserService, private alertify: AlertifyService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createUserForm();
  }
  createUserForm() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      address: ['', [Validators.required, Validators.maxLength(70)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(13)]]
    });
  }

  addUser() {
    if (this.addForm.valid) {
      this.user = Object.assign({}, this.addForm.value);
      this.userService.addUser(this.user).subscribe(userR => {
        this.alertify.success('Success');
        this.route.navigate(['/ponuda/' + userR.id]);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
