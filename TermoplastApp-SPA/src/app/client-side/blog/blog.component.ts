import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/_models/posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Posts[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.route.data.subscribe(data => {
      this.posts = data['posts'];
    });
  }

}
