import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePostComponent} from "../../components/create-post/create-post.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreatePostClick() {
    this.dialog.open(CreatePostComponent);
  }
}
