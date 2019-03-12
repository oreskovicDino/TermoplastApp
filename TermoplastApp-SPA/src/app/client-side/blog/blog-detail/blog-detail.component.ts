import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Posts } from './../../../_models/posts';
import { PostsService } from './../../../_services/posts.service';
import { AlertifyService } from './../../../_services/alertify.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post: Posts;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private postService: PostsService) { }

  ngOnInit() {
    this.loadPost();
    this.galleryOpt();
  }

  loadPost() {
    this.route.data.subscribe(data => {
      this.post = data['post'];
    });
  }

  galleryOpt() {
    this.galleryOptions = [
      {
        width: '800px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ];
    this.galleryImages = this.getImages();
  }
  getImages() {
    const imageurls = [];
    for (let i = 0; i < this.post.photos.length; i++) {
      imageurls.push({
        small: this.post.photos[i].url,
        medium: this.post.photos[i].url,
        big: this.post.photos[i].url,
        description: this.post.photos[i].description
      });
    }
    return imageurls;
  }

}
