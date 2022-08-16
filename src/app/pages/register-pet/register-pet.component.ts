import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn();
  }
  selectedProfilePhoto: File;
  selectedPhotoString : String;
  name: String;
  type: String;
  race: String;
  color: String;
  birthDate: Date;
  gender: String;
  favouriteFood: String;
  description: String;
  isNeutered: String;

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  onPhotoSelected(photoselector:HTMLInputElement){
    // @ts-ignore
    this.selectedProfilePhoto = photoselector.files[0];
    if(!this.selectedProfilePhoto) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedProfilePhoto);
    fileReader.addEventListener(
      "loadend",
      ev => {
        // @ts-ignore
        let readableString = fileReader.result.toString();
        let postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image");
        postPreviewImage.src = readableString;
        this.selectedPhotoString = readableString;

      }
    )

  }

  async handlePetRegister(){
    let resultAxios = (await axios.post('http://localhost:4200/api/registerPet',
      {
        "name":this.name,
        "type": this.type,
        "race":this.race,
        "color":this.color,
        "birthDate":this.birthDate,
        "gender":this.gender,
        "favouriteFood": this.favouriteFood,
        "description": this.description,
        "isNeutered": this.isNeutered,
        "picture":this.selectedPhotoString,
        "token": localStorage.getItem("token")

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;

    if(resultAxios.addedPet) {
      await this.router.navigate(['/feed']);
    }

  }

}
