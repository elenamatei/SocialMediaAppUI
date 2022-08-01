import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
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


  onPhotoSelected(photoselector:HTMLInputElement){
    //
    // // @ts-ignore
    // this.selectedProfilePhoto = photoselector.files[0];
    // console.log(this.selectedProfilePhoto)
    // const imageFormData = new FormData();
    // imageFormData.append('image', this.selectedProfilePhoto, this.selectedProfilePhoto.name);
    //
    // console.log(imageFormData);

    // @ts-ignore
    this.selectedProfilePhoto = photoselector.files[0];
    if(!this.selectedProfilePhoto) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedProfilePhoto);
    // console.log(fileReader);
    fileReader.addEventListener(
      "loadend",
      ev => {
        // @ts-ignore
        let readableString = fileReader.result.toString();
        let postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image");
        postPreviewImage.src = readableString;
        this.selectedPhotoString = readableString;
        console.log(readableString)


      }
    )

  }



  async handlePetRegister(){
    let resultAxios =await axios.post('http://localhost:4200/api/registerPet',
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
        "token":"1b1f7616764584eb399acc2ef6a595dd"

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
