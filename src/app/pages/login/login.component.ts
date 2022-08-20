import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  email: String ;
  password: String ;
  hide = true;

  openSnackBar(message: string, action:string) {
    this._snackBar.open(message,action,{
      duration: 4000,
    });
  }

  async handleLogin(){

    let resultAxios = (await axios.post('http://localhost:4200/api/login',
      {
        "email":this.email,
        "password":this.password
      },
      {
        headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
        'Accept': '*/*'}

      })).data;

    if(resultAxios.error){
      if(resultAxios.error.errorCode == 1){
        this.openSnackBar("Wrong email!", "Ok");
      }
      else if(resultAxios.error.errorCode == 2){
        this.openSnackBar("Wrong email or password!", "Ok");
      }

    } else {
      localStorage.setItem("token", resultAxios.token);
      localStorage.setItem("user_id", resultAxios.user_id);
      localStorage.setItem("full_name", resultAxios.full_name);
      await this.router.navigate(['/feed']);
    }

  }

}
