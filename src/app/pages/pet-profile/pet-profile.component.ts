import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import axios from "axios";


@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  name: String;
  type:String;
  race: String;
  color: String;
  isNeutered: String;
  gender: String;
  birthDate: string;
  favouriteFood: String;
  description: String;
  picture: String;
  owner_Id: string;
  ownerName: string;
  petId: string;
  baseUrl = 'http://localhost:4200';
  localStorageId: string | null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.localStorageId = localStorage.getItem("user_id");

    this.getPet();
  }

  async getPet() {
    let user_id = "";
    let id = "";
    this.route.params.subscribe( res => {
      user_id = res["user_id"];
      id = res["id"];
      this.petId = id;

    } );
    let resultAxios = (await axios.get('http://localhost:4200/api/petProfile/'+user_id+"/"+id,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;
    if(resultAxios.petProfile){
        this.name = resultAxios.petProfile.name;
        this.type = resultAxios.petProfile.type;
        this.race = resultAxios.petProfile.race;
        this.color = resultAxios.petProfile.color;
        this.birthDate =resultAxios.petProfile.birthDate;
        this.gender = resultAxios.petProfile.gender;
        this.favouriteFood = resultAxios.petProfile.favouriteFood;
        this.description = resultAxios.petProfile.description;
        this.isNeutered = resultAxios.petProfile.isNeutered;
        this.picture = resultAxios.petProfile.picture;
        this.ownerName = resultAxios.petProfile.user.lastName +" "+ resultAxios.petProfile.user.firstName;

    }

    if(resultAxios.ownerId){
      this.owner_Id = resultAxios.ownerId;
    }

  }

  async goToOwner(owner:string){
    await this.router.navigate(['/profile/' + owner ]);
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

}
