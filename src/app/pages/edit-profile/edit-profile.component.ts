import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute, Router} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private form : ReactiveFormsModule, private _snackBar: MatSnackBar, private router: Router) { }

  localStorageId: string | null;
  urlId: undefined;

  ngOnInit(): void {
    this.localStorageId = localStorage.getItem("user_id");

    this.getUser();
  }
  openSnackBar(message: string, action:string) {
    this._snackBar.open(message,action,{
      duration: 4000,
    });
  }

  hide = true;

  lastName : String;
  firstName : String = "";
  birthDate: Date;
  email: String;
  password: String;
  gender: String;

  birthPlace: String;
  livingCity: String;
  occupation: String;
  workPlace: String;
  studies: String;
  description: String;
  profilePicture: String;
  updatedProfilePicture: String;

  selectedProfilePhoto: File;
  selectedPhotoString : String;
  baseUrl = 'http://localhost:4200';



  async getUser() {

    let resultAxios = (await axios.get('http://localhost:4200/api/profile/'+ this.localStorageId,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;

    if(resultAxios.user){
      this.lastName = resultAxios.user.lastName;
      this.firstName = resultAxios.user.firstName;
      this.birthDate = resultAxios.user.birthDate;
      this.email = resultAxios.user.email;
      this.password = resultAxios.user.password;
      this.gender = resultAxios.user.gender;
    }
    if(resultAxios.details){
      this.birthPlace = resultAxios.details.birthPlace;
      this.livingCity = resultAxios.details.livingCity;
      this.studies = resultAxios.details.studies;
      this.occupation = resultAxios.details.occupation;
      this.workPlace = resultAxios.details.workPlace;
      this.description = resultAxios.details.description;
      this.profilePicture = resultAxios.details.profilePicture;
    }
  }

  async onUpdateClick(){

    let resultAxios =(await axios.post('http://localhost:4200/api/editProfile/',
      {
        "token": localStorage.getItem("token"),
        "firstName":this.firstName,
        "lastName": this.lastName,
        "email":this.email,
        "password":this.password,
        "gender":this.gender,
        "birthDate":this.birthDate,
        "birthPlace": this.birthPlace,
        "livingCity": this.livingCity,
        "occupation":this.occupation,
        "workPlace":this.workPlace,
        "studies": this.studies,
        "description":this.description,
        "profilePicture":((!this.updatedProfilePicture)? '' : this.updatedProfilePicture)
      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;
    if(resultAxios.updateResults == 1){
      this.openSnackBar("Profile updated!", "Ok");
      await this.router.navigate(['/feed']);
    } else {
      this.openSnackBar("There's nothing to update!", "Ok");
      await this.router.navigate(['/feed']);
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
        this.updatedProfilePicture = this.selectedPhotoString;

      }
    )
  }

}
