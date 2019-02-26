import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Posts } from '../_models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl + 'post');
  }

  getPost(id): Observable<Posts> {
    return this.http.get<Posts>(this.baseUrl + 'post/' + id);
  }

}
