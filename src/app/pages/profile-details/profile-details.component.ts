import {Component, Input, OnInit} from '@angular/core';
import axios from "axios";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

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
    // console.log(this.description);
    let id = "";
    this.route.params.subscribe( res => {
      id = res["id"];

    } );
    let resultAxios =await axios.post('http://localhost:4200/api/addDetails/'+id,
      {
        "birthPlace":this.birthPlace,
        "livingCity":this.livingCity,
        "occupation": this.occupation,
        "workPlace":this.workPlace,
        "studies": this.studies,
        "description":this.description,
        "profilePicture":this.selectedPhotoString,
        "token":"d223a989e493ebb60c7426b1a666fac4"
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
