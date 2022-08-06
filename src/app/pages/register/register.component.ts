import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import axios from "axios";
import {MatSnackBar} from "@angular/material/snack-bar";
//import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  // openSnackBar(message: string) {
  //   this._snackBar.openFromComponent(RegisterComponent, {
  //     duration: this.durationInSeconds * 1000,
  //   });
  // }
  openSnackBar(message: string, action:string) {
    this._snackBar.open(message,action,{
      duration: 4000,
    });
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
