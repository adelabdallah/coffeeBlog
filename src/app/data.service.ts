import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blogId: number;

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get('../assets/blogPosts.json')
  }

  setBlogId(id) {
    this.blogId = id;
  }

  getBlogId() {
    return this.blogId;
  }
}
