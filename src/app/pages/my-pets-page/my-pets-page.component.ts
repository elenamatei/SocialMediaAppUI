import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-pets-page',
  templateUrl: './my-pets-page.component.html',
  styleUrls: ['./my-pets-page.component.css']
})
export class MyPetsPageComponent implements OnInit {

  urlId: string;
  allPets: undefined;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.route.params.subscribe( res => {
      this.urlId = res["user_id"];
    } );
    this.getPets();
  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async getPets(){
    let resultAxios = (await axios.get('http://localhost:4200/api/myPets/' + this.urlId,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;
    this.allPets = resultAxios.pets;
  }

  async filterByType(type: String){

    let resultAxios = (await axios.get('http://localhost:4200/api/pets/'+ type + '/'+ this.urlId,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;

    this.allPets = resultAxios.pets;
    }
  }
