import {Component, Input, OnInit} from '@angular/core';
import {CommentsComponent} from "../comments/comments.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

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
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {
    this.firstName = this.getPost.user.firstName;
    this.lastName = this.getPost.user.lastName;
    this.text = this.getPost.text;
    this.pictureURL = this.getPost.picture;
    this.postId = this.getPost.id;

    this.isLoggedIn();

  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
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
  onCommentsClick(postId: string){
    this.dialog.open(CommentsComponent).componentInstance.postId = postId;
  }


}
