import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePostComponent} from "../../components/create-post/create-post.component";
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn();
    this.getInfo();
  }

  allPosts: undefined;
  detailsAdded: Boolean;

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }
  // refreshPageAfterPost(){
  //   alert('nskjmn sca');
  // }


  async getInfo() {

    let resultAxios =(await axios.post('http://localhost:4200/api/feed/',
      {
        "token": localStorage.getItem("token")
      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    this.allPosts = resultAxios.posts;
    this.detailsAdded = resultAxios.hasDetails;

  }


  onCreatePostClick() {
    this.dialog.open(CreatePostComponent).afterClosed().subscribe(result=>{
      this.getInfo();
    });
    // (refreshPage)="refreshPageAfterPost()"
  }
}
