import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-pet-profile',
  templateUrl: './edit-pet-profile.component.html',
  styleUrls: ['./edit-pet-profile.component.css']
})
export class EditPetProfileComponent implements OnInit {

  localStorageId: string | null;

  constructor(private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.localStorageId = localStorage.getItem("user_id");
    this.getPet();
  }
  selectedProfilePhoto: File;
  selectedPhotoString : String;
  petId: string;
  name: String;
  type: String;
  race: String;
  color: String;
  birthDate: Date;
  gender: String;
  favouriteFood: String;
  description: String;
  isNeutered: String;
  picture: String;
  updatedPicture: String;
  baseUrl = 'http://localhost:4200';

  openSnackBar(message: string, action:string) {
    this._snackBar.open(message,action,{
      duration: 4000,
    });
  }

  async getPet() {
    let id = "";
    this.route.params.subscribe( res => {

      id = res["id"];
      this.petId = id;

    } );
    let resultAxios = (await axios.get('http://localhost:4200/api/petProfile/'+this.localStorageId + "/"+ id,

      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'
        }

      })).data;
    if(resultAxios.petProfile){
      this.name = resultAxios.petProfile.name;
      this.type = resultAxios.petProfile.type;
      this.race = resultAxios.petProfile.race;
      this.color = resultAxios.petProfile.color;
      this.birthDate =resultAxios.petProfile.birthDate;
      this.gender = resultAxios.petProfile.gender;
      this.favouriteFood = resultAxios.petProfile.favouriteFood;
      this.description = resultAxios.petProfile.description;
      this.isNeutered = resultAxios.petProfile.isNeutered;
      this.picture = resultAxios.petProfile.picture;
    }
  }


  async onUpdateClick(){

    console.log(this.petId)
    let resultAxios =(await axios.post('http://localhost:4200/api/editPetProfile/',
      {
        "token":localStorage.getItem("token"),
        "petId": this.petId,
        "name":this.name,
        "type":this.type,
        "race":this.race,
        "color":this.color,
        "birthDate":this.birthDate,
        "gender":this.gender,
        "favouriteFood":this.favouriteFood,
        "description":this.description,
        "isNeutered":this.isNeutered,
        "picture":((!this.updatedPicture)?'' : this.updatedPicture)
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
        this.updatedPicture = this.selectedPhotoString;
      }
    )
  }

}
