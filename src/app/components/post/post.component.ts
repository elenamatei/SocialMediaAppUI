import {Component, Input, OnInit} from '@angular/core';
import {CommentsComponent} from "../comments/comments.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private dialog:MatDialog, private router: Router) { }

  @Input() getPost = {user:{firstName:"",lastName:""},text:"", picture:"", id:""};

  firstName: String;
  lastName: String;
  text: String;
  postId: string;
  pictureURL: String;
  localUserId: string | null;
  baseUrl = 'http://localhost:4200';
  postIsLiked = false;


  ngOnInit(): void {
    this.firstName = this.getPost.user.firstName;
    this.lastName = this.getPost.user.lastName;
    this.text = this.getPost.text;
    this.pictureURL = this.getPost.picture;
    this.postId = this.getPost.id;
    this.localUserId = localStorage.getItem("user_id");

    this.isLoggedIn();
    this.verifyLike(this.postId,this.localUserId);

  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }


  onCommentsClick(postId: string){
    this.dialog.open(CommentsComponent).componentInstance.postId = postId;
  }

  async isLiked(postId:string, localUserId:string | null){

      let resultAxios =(await axios.get('http://localhost:4200/api/feed/giveLike/'+ postId + "/"+ localUserId,

        {
          headers: { 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': '*/*'}

        })).data;
    this.postIsLiked = true;
  }


  async isDisliked(postId:string, localUserId:string | null){
    let resultAxios =(await axios.get('http://localhost:4200/api/feed/takeLike/'+ postId + "/"+ localUserId,

      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;
    this.postIsLiked = false;
  }

  async verifyLike(postId:string, localUserId:string | null){

    let resultAxios =(await axios.get('http://localhost:4200/api/feed/verifyLike/'+ postId + "/"+ localUserId,

      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;
    this.postIsLiked = resultAxios.liked;
  }


}
