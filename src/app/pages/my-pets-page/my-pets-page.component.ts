import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-pets-page',
  templateUrl: './my-pets-page.component.html',
  styleUrls: ['./my-pets-page.component.css']
})
export class MyPetsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.getPets();
  }

  allPets: undefined;

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async getPets(){

    let resultAxios = (await axios.get('http://localhost:4200/api/myPets/' + localStorage.getItem("user_id"),

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;

    this.allPets = resultAxios.pets;
  }

  async filterByType(type: String){

    let resultAxios = (await axios.get('http://localhost:4200/api/pets/'+ type + '/'+ localStorage.getItem("user_id"),

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;

    this.allPets = resultAxios.pets;
    }
  }
