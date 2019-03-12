import { PostsService } from './../../../_services/posts.service';
import { AlertifyService } from './../../../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Posts } from 'src/app/_models/posts';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-blog-edit',
  templateUrl: './admin-blog-edit.component.html',
  styleUrls: ['./admin-blog-edit.component.css']
})
export class AdminBlogEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  post: Posts;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private postService: PostsService,
    private navigate: Router) { }

  ngOnInit() {
    this.loadPost();
  }

  loadPost() {
    this.route.data.subscribe(data => {
      this.post = data['post'];
    });
  }
  updatePost() {
    this.postService.updatePost(this.post.id, this.post).subscribe(next => {
      this.alertify.success('Uspješno spremljene promjene');
      this.editForm.reset(this.post);
    }, error => {
      this.alertify.error(error);
    });

  }
  updateMainPhoto(photoUrl) {
    this.post.photoUrl = photoUrl;
  }

  deletePost(id: number) {
    this.alertify.confirm('Jeste li sigurni da želite obrisati ovaj blog?', () => {
      this.postService.deletePost(id).subscribe(next => {
        this.navigate.navigate(['/admin']);
        this.alertify.success('Blog ' + this.post.title + '. Je Obrisan');
      }, error => {
        this.alertify.error('Faild to delete the post' + error);
      });
    });
  }
}
