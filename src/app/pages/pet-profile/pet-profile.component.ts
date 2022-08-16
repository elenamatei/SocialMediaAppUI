import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import axios from "axios";


@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  localStorageId: string | null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.localStorageId = localStorage.getItem("user_id");

    this.getPet();
  }

  // petId: String;
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
  ownerId: String;
  // age: String;

  baseUrl = 'http://localhost:4200';

  // ownerId: undefined;

  async getPet() {
    let user_id = "";
    let id = "";
    this.route.params.subscribe( res => {
      user_id = res["user_id"];
      id = res["id"];


    } );
    let resultAxios = await axios.get('http://localhost:4200/api/petProfile/'+user_id+"/"+id,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })
      .then((response) => {
        console.log(response.data);

        // this.petId = response.data.id;
        this.name = response.data.name;
        this.type = response.data.type;
        this.race = response.data.race;
        this.color = response.data.color;
        this.birthDate = response.data.birthDate;
        this.gender = response.data.gender;
        this.favouriteFood = response.data.favouriteFood;
        this.description = response.data.description;
        this.isNeutered = response.data.isNeutered;
        this.picture = response.data.picture;
        // this.age = response.data.age;

        this.ownerId = response.data.user.id;
      });

    // console.log(this.name, this.petId);
    console.log(this.name);

  }

  async goToUser(owner_id:String){

    await this.router.navigate(['/profile/'+ this.ownerId]);
    console.log(this.name, this.ownerId, );

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
