import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pet-profile',
  templateUrl: './edit-pet-profile.component.html',
  styleUrls: ['./edit-pet-profile.component.css']
})
export class EditPetProfileComponent implements OnInit {

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

}
