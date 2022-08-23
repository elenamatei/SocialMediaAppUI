import {Component, Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  text: string;
  name: string;
  receiverId:string;
  token: string | null;
  userId: string;
  chatRefresh: number;
  creatorName: string;
  allMessages:undefined;
  isOpened = false;

  constructor(private router: Router, private el: ElementRef) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.getMessages(this.userId);
  }

  @HostListener("document:click", ['$event'])
  clickedOut() {
    // @ts-ignore
    if(!this.el.nativeElement.contains(event.target)){
      if(this.isOpened){
        clearTimeout(this.chatRefresh);
      }

      this.isOpened = !this.isOpened;
    }

  }



  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async getMessages(userId: string){
    // this.scrollToBottom();
    let resultAxios =(await axios.post('http://localhost:4200/api/chat/getConversation',
      {
        "token": localStorage.getItem("token"),
        "receiverId": userId
      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;
    if(this.allMessages != resultAxios.conversation)
      this.scrollToBottom();

    this.allMessages = resultAxios.conversation;
    this.chatRefresh = setTimeout(()=> {this.getMessages(this.userId);}, 1000);
  }

  async sendMessage(messageInput:HTMLInputElement){

    let resultAxios =(await axios.post('http://localhost:4200/api/chat/sendMessage',
      {
        "token": localStorage.getItem("token"),
        "receiverId": this.userId,
        "message": messageInput.value

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    await this.getMessages(this.userId);
    messageInput.value = "";
    this.scrollToBottom();
  }

  scrollToBottom() {
    let replyBox = this.el.nativeElement.querySelector("#reply-box");
   // @ts-ignore
    replyBox.scrollTop = replyBox.scrollHeight;
  }

  isMessageCreator(receiver_id:string){
    try{
      return receiver_id.toString() != localStorage.getItem("user_id");
    }
    catch (err){
      return null;
    }
  }

}
