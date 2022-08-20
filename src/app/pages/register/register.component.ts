import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
  }


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

    let resultAxios =(await axios.post('http://localhost:4200/api/register/',
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

      })).data;

    if(resultAxios.error) {
      if (resultAxios.error.errorCode == 1) {
        this.openSnackBar("Wrong email or email already taken!", "Ok");
      }
    } else {
      localStorage.setItem("token", resultAxios.token);
      localStorage.setItem("user_id", resultAxios.user_id);
      localStorage.setItem("full_name", resultAxios.full_name);
      await this.router.navigate(['/anyPets']);
    }

  }

}
