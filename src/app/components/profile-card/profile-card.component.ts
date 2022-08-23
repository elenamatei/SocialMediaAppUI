import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";
import {CommentsComponent} from "../comments/comments.component";
import {MatDialog} from "@angular/material/dialog";
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor(private router: Router, private dialog:MatDialog,private el: ElementRef) { }

  @Input() getAllUsers = {user:{firstName:"",lastName:"",birthDate:"",joinedDate:"",gender:"",id:""},occupation:"",livingCity: "",profilePicture:""};

  firstName: String;
  lastName: String;
  birthDate: string;
  joinedDate: String;
  occupation: String;
  livingCity: String;
  profilePicture: String;
  userId: string;
  gender: String;
  myUserId = localStorage.getItem("user_id");
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {
    this.firstName = this.getAllUsers.user.firstName;
    this.lastName = this.getAllUsers.user.lastName;
    this.birthDate = this.getAllUsers.user.birthDate;
    this.joinedDate = this.getAllUsers.user.joinedDate;
    this.userId = this.getAllUsers.user.id;
    this.gender = this.getAllUsers.user.gender;
    if(this.getAllUsers.occupation == null){
      this.occupation = "unspecified";
    } else{
      this.occupation = this.getAllUsers.occupation;
    }
    if(this.getAllUsers.livingCity == null){
      this.livingCity = "unspecified";
    } else {
      this.livingCity = this.getAllUsers.livingCity;
    }
    if(this.getAllUsers.profilePicture == null){
      this.profilePicture = "/api/uploads/user.png";
    } else {
      this.profilePicture = this.getAllUsers.profilePicture;
    }

    this.isLoggedIn();
  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  ageFromBirthDate(birthDate: string): number {
    let today = new Date();
    let date = new Date(birthDate);
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age--;
    }

    return age;
  }

  calculateAge(birthDate: string){
    let date = new Date(birthDate);
    let current = new Date();
    let years = (current.getFullYear() - date.getFullYear());
    return years;
  }

  async goToProfile(userId:String){

    await this.router.navigate(['/profile/'+ this.userId ]);

  }

  async onMessageClick(userId: string){
    this.dialog.open(ChatComponent).componentInstance.userId = userId;
  }


}
