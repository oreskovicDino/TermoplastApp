import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private ruoter: Router, private alertify: AlertifyService) { }

  canActivate(): boolean {
    if (this.authService.loggedin()) {
      return true;
    }
    this.alertify.error('pristup nije dozvoljen! Prijavit se i pokušajte ponovno');
    this.ruoter.navigate(['/home']);
    return false;
  }
}
