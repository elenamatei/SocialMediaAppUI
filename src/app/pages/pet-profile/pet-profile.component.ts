import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import axios from "axios";


@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getPet();
  }

  name: String;
  type:String;
  race: String;
  color: String;
  isNeutered: String;
  gender: String;
  birthDate: Date;
  favouriteFood: String;
  description: String;

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
        this.name = response.data.name;
        this.type = response.data.type;
        this.race = response.data.race;
        this.color = response.data.color;
        this.birthDate = response.data.birthDate.join("-");
        this.gender = response.data.gender;
        this.favouriteFood = response.data.favouriteFood;
        this.description = response.data.description;
        this.isNeutered = response.data.isNeutered;


      });

  }


}
