import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private data: DataService) { }

  setBlogId(blogId) {
    this.data.setBlogId(blogId);
  }

  ngOnInit() {
  }

}
