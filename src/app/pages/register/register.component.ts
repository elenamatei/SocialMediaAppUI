import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import axios from "axios";
//import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  hide = true;

  firstName: String;
  lastName: String;
  email: String;
  password: String;
  gender: String;
  birthDate: Date;

  async handleRegister(){
    let resultAxios =await axios.post('http://localhost:4200/api/register/',
      {
        "firstName":this.firstName,
        "lastName": this.lastName,
        "email":this.email,
        "password":this.password,
        "gender":this.gender,
        "birthDate":this.birthDate
      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })
      .then((response) => {
        console.log(response.data);
      });



  }



}
