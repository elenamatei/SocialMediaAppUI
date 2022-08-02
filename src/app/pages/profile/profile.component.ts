import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  lastName : String;
  firstName : String;
  birthDate: Date;


  ngOnInit(): void {


      this.getUser();

  }
  async getUser() {
    let id = "";
    this.route.params.subscribe( res => {
      id = res["id"];

    } );
    let resultAxios = await axios.get('http://localhost:4200/api/profile/'+id,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })
      .then((response) => {
        console.log(response.data);
        this.lastName = response.data.lastName;
        this.firstName = response.data.firstName;
        this.birthDate = response.data.birthDate.join("-");
      });

  }


  }
