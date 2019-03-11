import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Posts } from 'src/app/_models/posts';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/_services/posts.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-blog-card',
  templateUrl: './admin-blog-card.component.html',
  styleUrls: ['./admin-blog-card.component.css']
})
export class AdminBlogCardComponent implements OnInit {
  @Input() posts: Posts[];

  constructor() { }

  ngOnInit() {
  }


}
