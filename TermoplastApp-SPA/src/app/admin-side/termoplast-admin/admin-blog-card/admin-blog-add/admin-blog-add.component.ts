import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  post: Posts;
  blogForm: FormGroup;

  constructor(private postService: PostsService,
    private alertify: AlertifyService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.addBlogForm();
  }
  addBlogForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      head: ['', Validators.required],
      body: ['']
    });
  }
  addPost() {
    if (this.blogForm.valid) {
      this.post = Object.assign({}, this.blogForm.value);
      this.postService.addPost(this.post).subscribe(postA => {
        this.alertify.success('Blog uspješno dodan');
        this.navigate(postA.id);
      }, error => {
        this.alertify.error(error);
      });
    }

  }


  navigate(id: number) {
    this.route.navigateByUrl('/a/blog/' + id);
  }

}
