import { Admin } from '../_models/admin';
import { AlertifyService } from '../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminService } from '../_services/admin.service';

@Injectable()
export class AdminResolver implements Resolve<Admin> {
    constructor(private adminService: AdminService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Admin> {
        return this.adminService.getAdmin(route.params['id']).pipe(
            catchError( error => {
                this.alertify.error('Problem retriving data');
                this.router.navigate(['/admin']);
                return of(null);
            })
        );
    }
}
