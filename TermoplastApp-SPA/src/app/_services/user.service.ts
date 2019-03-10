import { Items } from './../_models/items';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'user');
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user/' + id);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'user/', user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'user/' + id, {});
  }
  addItem(userid: number, item: Items) {
    return this.http.post(this.baseUrl + 'user/' + userid + '/item', item);
  }

}
