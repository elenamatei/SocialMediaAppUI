import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  allAdoptions: undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.getAdoptions();
  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async getAdoptions(){
    let resultAxios = (await axios.get('http://localhost:4200/api/adoptions',

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;
    this.allAdoptions = resultAxios.adoptions;
  }

}
