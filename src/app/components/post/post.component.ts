import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  // onReplyClick(){
  //   this.dialog.open(ReplyComponent,{data: this.postData.postId});
  // }


}
