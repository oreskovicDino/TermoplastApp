import { AdminService } from './../../../_services/admin.service';
import { AlertifyService } from './../../../_services/alertify.service';
import { NgForm } from '@angular/forms';
import { Admin } from './../../../_models/admin';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  admin: Admin;
  @HostListener('window:beforeunload', ['$event'])
  uloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private adminService: AdminService,
    private navigate: Router) { }

  ngOnInit() {
    this.loadAdmin();
  }

  loadAdmin() {
    this.route.data.subscribe(data => {
      this.admin = data['admin'];
    });
  }
  updateAdmin() {
    this.adminService.updateAdmin(this.admin.id, this.admin).subscribe(next => {
      this.alertify.success('Uspješno spremljene promjene');
      this.editForm.reset(this.admin);
    }, error => {
      this.alertify.error(error);
    });
  }
  deleteAdmin(id: number) {
    this.alertify.confirm('Are you sure you want to delete this Admin!', () => {
      this.adminService.deleteAdmin(id).subscribe(next => {
        this.navigate.navigate(['/admin']);
        this.alertify.success('Admin has been deleted');
      }, error => {
        this.alertify.error('Faild to delete the Admin');
      });
    });
  }


}
