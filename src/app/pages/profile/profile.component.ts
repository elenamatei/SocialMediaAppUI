import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute, Router} from "@angular/router";
import {ChatComponent} from "../../components/chat/chat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dialog:MatDialog, private router: Router) {

  }

  lastName : String;
  firstName : String;
  birthDate: string;
  // age: String;

  birthPlace: String;
  livingCity: String;
  occupation: String;
  workPlace: String;
  studies: String;
  description: String;
  profilePicture: String;
  petsNumber: String;

  localStorageId: string | null;
  urlId: string;
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {

    this.isLoggedIn();

    this.localStorageId = localStorage.getItem("user_id");

    this.route.params.subscribe( res => {
      this.urlId = res["id"];
    } );

      this.getUser();
  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async getUser() {

    let resultAxios = (await axios.get('http://localhost:4200/api/profile/'+this.urlId,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;

    console.log(resultAxios.user);
    if(resultAxios.user){
        this.lastName = resultAxios.user.lastName;
        this.firstName = resultAxios.user.firstName;
        this.birthDate = resultAxios.user.birthDate;
        // this.age = resultAxios.user.age;
    }
    if(resultAxios.details){
      this.birthPlace = resultAxios.details.birthPlace;
      this.livingCity = resultAxios.details.livingCity;
      this.studies = resultAxios.details.studies;
      this.occupation = resultAxios.details.occupation;
      this.workPlace = resultAxios.details.workPlace;
      this.description = resultAxios.details.description;
      this.profilePicture = resultAxios.details.profilePicture;
    }
    if(resultAxios.pets){
      this.petsNumber = resultAxios.pets;
      // console.log(resultAxios.pets);
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

  async onMessageClick(userId: string){
    this.dialog.open(ChatComponent).componentInstance.userId = userId;
  }

}
