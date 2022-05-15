import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
// @ts-ignore
import {LoginDTO} from "../../interfaces/login-dto";
// @ts-ignore
import {AuthService} from "../../services/AuthService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;
  loginSuccess = false;

  public user:LoginDTO = {
    email:"",
    password:""
  }


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  handleLogin(){
    this.authService.login(this.user.email, this.user.password).subscribe((result) =>{
      this.invalidLogin = false;
      this.invalidLogin = true;
      } , () => {
      this.invalidLogin = true;
      this.loginSuccess = false;

    });
  }




}
