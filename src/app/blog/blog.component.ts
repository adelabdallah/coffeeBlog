import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPosts: Object;
  blogId: number;

  constructor(private data: DataService) { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.data.getBlogs().subscribe(blogs => {
      this.blogPosts = blogs
      this.blogId = this.data.getBlogId();
    })
  }

}
