import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private route: Router) { }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseUrl + 'post');
  }

  getPost(id): Observable<Posts> {
    return this.http.get<Posts>(this.baseUrl + 'post/' + id);
  }
  addPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.baseUrl + 'post/' + 'add', post);
  }
  deletePost(id: number) {
    return this.http.delete(this.baseUrl + 'post/' + id, {});
  }
  updatePost(id: number, post: Posts) {
    return this.http.put(this.baseUrl + 'post/' + id, post);
  }
  setMainPhoto(postId: number, id: number) {
    return this.http.post(this.baseUrl + 'post/' + postId + '/photos/' + id + '/setMain', {});
  }
  deletePhoto(postId: number, id: number) {
    return this.http.delete(this.baseUrl + 'post/' + postId + '/photos/' + id);
  }
}
