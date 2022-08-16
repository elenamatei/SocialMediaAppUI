import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.getInfo();
  }

  allUsers : undefined;

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  async getInfo() {

    let resultAxios =(await axios.post('http://localhost:4200/api/allUsers',
      {

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    this.allUsers= resultAxios.details;
    console.log( this.allUsers);


  }




}
