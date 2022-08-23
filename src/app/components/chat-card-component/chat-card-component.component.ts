import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-chat-card-component',
  templateUrl: './chat-card-component.component.html',
  styleUrls: ['./chat-card-component.component.css']
})
export class ChatCardComponentComponent implements OnInit {

  profilePicture: string;
  firstName: string;
  lastName: string;
  userId: string;
  baseUrl = 'http://localhost:4200';

  constructor(private dialog: MatDialog, private router: Router) { }
  @Input() getConversations = {user:{id:"", firstName:"", lastName:""}, details:{profilePicture:""}}


  ngOnInit(): void {
    this.isLoggedIn();
    this.firstName = this.getConversations.user.firstName;
    this.lastName = this.getConversations.user.lastName;
    this.userId = this.getConversations.user.id;
    this.profilePicture = this.getConversations.details.profilePicture;

  }
  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async onChatClick(userId: string){
    this.dialog.open(ChatComponent).componentInstance.userId = userId;
  }

}
