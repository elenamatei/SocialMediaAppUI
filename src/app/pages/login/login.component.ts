import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
// @ts-ignore
import {LoginDTO} from "../../interfaces/login-dto";
// @ts-ignore
import {AuthService} from "../../services/AuthService";
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccess = false;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  email: String ;
  password: String ;
  hide = true;

  async handleLogin(){

     console.log(this.email);




    let resultAxios =await axios.post('http://localhost:4200/api/login',
      {
        "email":this.email,
        "password":this.password
      },
      {
        headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
        'Accept': '*/*'}

      })
      .then((response) => {
        console.log(response.data);
        this.router.navigate(['/feed']);
      });





  }




}
