import { Posts } from './../../../_models/posts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() post: Posts;
  constructor() { }

  ngOnInit() {
  }

}
