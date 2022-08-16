import {Component, Input, OnInit} from '@angular/core';
import {CommentsComponent} from "../comments/comments.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  @Input() getPost = {user:{firstName:"",lastName:""},text:"", picture:""};

  firstName: String;
  lastName: String;
  text: String;
  pictureURL: String;
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {
    this.firstName = this.getPost.user.firstName;
    this.lastName = this.getPost.user.lastName;
    this.text = this.getPost.text;
    this.pictureURL = this.getPost.picture;

  }



  // onHeartClick(){
  //   this.postData.liked = !this.postData.liked;
  //   this.firestore.update(
  //     {// @ts-ignore
  //       path: ["Posts", this.postData.postId],
  //       data: {
  //         liked: this.postData.liked
  //
  //       },
  //       onComplete: (docId ) => {
  //
  //       },
  //       onFail: (err) =>{
  //
  //       }
  //     }
  //   );
  // }
  //
  //
  //
  //
  //
  // getCreatorInfo(){
  //   this.firestore.getDocument(
  //     {
  //       path: ["Users", this.postData.creatorId],
  //       onComplete: result => {
  //         let userDocument = result.data();
  //         // @ts-ignore
  //         this.creatorName = userDocument.publicName;
  //         // @ts-ignore
  //         this.creatorDescription = userDocument.description;
  //
  //       }
  //
  //     }
  //   );
  //
  // }
  //
  onCommentsClick(){
    // this.dialog.open(CommentsComponent,{data: this.postData.postId});
    this.dialog.open(CommentsComponent);
  }


}
