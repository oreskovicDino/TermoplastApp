import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Admin } from '../_models/admin';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.baseUrl + 'admins', httpOptions);
  }
  getAdmin(id): Observable<Admin> {
    return this.http.get<Admin>(this.baseUrl + 'admins/' + id, httpOptions);
  }
  updateAdmin(id: number, admin: Admin) {
    return this.http.put(this.baseUrl + 'admins/' + id, admin);
  }
  deleteAdmin(id: number) {
    return this.http.delete(this.baseUrl + 'admins/' + id, {});
  }


}
