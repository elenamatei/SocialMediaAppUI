import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-birthdays-page',
  templateUrl: './birthdays-page.component.html',
  styleUrls: ['./birthdays-page.component.css']
})
export class BirthdaysPageComponent implements OnInit {

  birthdays: undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn();
    this.getBirthdays();
  }
  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }
  async getBirthdays() {

    let resultAxios =(await axios.post('http://localhost:4200/api/feed/birthdays',
      {
      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    this.birthdays = resultAxios.birthdays;
    console.log("Birthdays", resultAxios.birthdays);
  }

}
