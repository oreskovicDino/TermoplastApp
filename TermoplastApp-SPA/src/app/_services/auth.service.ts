import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decoddedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const admin = response;
        if (admin) {
          localStorage.setItem('token', admin.token);
          this.decoddedToken = this.jwtHelper.decodeToken(admin.token);
          console.log(this.decoddedToken);
        }
      })
    );
  }


  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
