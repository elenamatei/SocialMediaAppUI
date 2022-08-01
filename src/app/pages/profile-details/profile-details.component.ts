import {Component, Input, OnInit} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() show: boolean = true
  selectedProfilePhoto: File;
  selectedPhotoString : String;
  description: String;
  occupation: String;
  birthPlace: String;
  workPlace: String;
  livingCity: String;
  studies: String;


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
        console.log(this.selectedPhotoString);


      }
    )

  }


  async handleAddDetails(){
    console.log(this.description);
    let resultAxios =await axios.post('http://localhost:4200/api/addDetails',
      {
        "birthPlace":this.birthPlace,
        "livingCity":this.livingCity,
        "occupation": this.occupation,
        "workPlace":this.workPlace,
        "studies": this.studies,
        "description":this.description,
        "profilePicture":this.selectedPhotoString,
        "token":"6c6d555c2a9c1fc466635a25197dafc0"
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
