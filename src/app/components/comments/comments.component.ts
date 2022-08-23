import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private router: Router, private el: ElementRef) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.getComments(this.postId);
  }

  text: string;
  name: string;
  postId: string;
  userId: string;
  token: string | null;
  userName: string;
  isOpened = false;
  commentRefresh: number;

  allComments: undefined;

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }
  scrollToBottom() {
    let replyBox = this.el.nativeElement.querySelector("#reply-box");
    // @ts-ignore
    replyBox.scrollTop = replyBox.scrollHeight;
  }

  @HostListener("document:click", ['$event'])
  clickedOut() {
    // @ts-ignore
    if(!this.el.nativeElement.contains(event.target)){
      if(this.isOpened){
        clearTimeout(this.commentRefresh);
      }

      this.isOpened = !this.isOpened;
    }

  }

  async getComments(postId: string){
    this.scrollToBottom();
    let resultAxios =(await axios.post('http://localhost:4200/api/comments/getCommentsForPost',
      {
        "token": localStorage.getItem("token"),
        "postId": postId

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    this.allComments = resultAxios.comments;
    this.commentRefresh = setTimeout(()=> this.getComments(this.postId), 1000);
  }

  async postComment(commentInput:HTMLInputElement){

    let resultAxios =(await axios.post('http://localhost:4200/api/comments/postComment',
      {
        "token": localStorage.getItem("token"),
        "postId": this.postId,
        "text":  commentInput.value,
        "userName": localStorage.getItem("full_name")

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;


    await this.getComments(this.postId);
    commentInput.value = "";
    this.scrollToBottom();
  }
  isCommentCreator(userId:string){
    try{
      return userId == localStorage.getItem("user_id");
    }
    catch (err){
      return null;
    }
  }





}
