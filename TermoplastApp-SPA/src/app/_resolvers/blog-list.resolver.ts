import { PostsService } from './../_services/posts.service';
import { AlertifyService } from './../_services/alertify.service';
import { Posts } from './../_models/posts';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BlogListResolver implements Resolve<Posts[]> {
    constructor(private postService: PostsService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Posts[]> {
        return this.postService.getPosts().pipe(
            catchError(error => {
                this.alertify.error('Problem retriving data');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
