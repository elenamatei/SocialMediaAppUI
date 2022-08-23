import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ChatComponent} from "../chat/chat.component";
import {MatDialog} from "@angular/material/dialog";
import axios from "axios";

@Component({
  selector: 'app-adoption-card',
  templateUrl: './adoption-card.component.html',
  styleUrls: ['./adoption-card.component.css']
})
export class AdoptionCardComponent implements OnInit {

  constructor(private router: Router,  private dialog:MatDialog) { }
  @Input() getAdoptions = {user:{firstName:"",lastName:"", id:""},id:"", name:"", gender:"", picture:"", birthDate:"", favouriteFood:"",description:"",race:"",type:"",color:""}

  firstName: string;
  lastName: string;
  userId: string;
  petId: string;
  name: string;
  gender: string;
  picture: string;
  birthDate: string;
  favouriteFood: string;
  description: string;
  race: string;
  type: string;
  color: string;
  myUserId = localStorage.getItem("user_id");
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {
    this.isLoggedIn();

    this.name = this.getAdoptions.name;
    this.gender = this.getAdoptions.gender;
    this.birthDate = this.getAdoptions.birthDate;
    this.petId = this.getAdoptions.id;
    this.picture = this.getAdoptions.picture;
    this.favouriteFood = this.getAdoptions.favouriteFood;
    this.description = this.getAdoptions.description;
    this.race = this.getAdoptions.race;
    this.type = this.getAdoptions.type;
    this.color = this.getAdoptions.color;
    this. userId = this.getAdoptions.user.id;
    this.firstName = this.getAdoptions.user.firstName;
    this.lastName = this.getAdoptions.user.lastName;

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

  async onMessageClick(userId: string){
    this.dialog.open(ChatComponent).componentInstance.userId = userId;
  }

  async goToProfile(userId:String){
    await this.router.navigate(['/profile/'+ this.userId ]);
  }

  async adopt(petId: string){
    let resultAxios =(await axios.post('http://localhost:4200/api/adoptPet/'+ petId,
      {
        "token":localStorage.getItem("token")

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    window.location.reload();
  }

}
