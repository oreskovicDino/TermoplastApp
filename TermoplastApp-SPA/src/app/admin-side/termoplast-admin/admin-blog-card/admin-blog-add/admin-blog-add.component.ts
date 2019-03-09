import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from 'src/app/_models/posts';
import { PostsService } from 'src/app/_services/posts.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blog-add',
  templateUrl: './admin-blog-add.component.html',
  styleUrls: ['./admin-blog-add.component.css']
})
export class AdminBlogAddComponent implements OnInit {
  @ViewChild('addForm') addForm: NgForm;
  post: any = {};

  constructor(private postService: PostsService, private alertify: AlertifyService, private route: Router) { }

  ngOnInit() {
  }
  addPost() {
    this.postService.addPost(this.post).subscribe(postA => {
      this.alertify.success('Uspješno dodano');
      this.navigate(postA.id);
    }, error => {
      this.alertify.error(error);
    });
  }

  navigate(id: number) {
    this.route.navigateByUrl('/a/blog/' + id);
  }

}
