import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  selectedProfilePhoto: File;
  selectedPhotoString: String;


  constructor(private dialog:MatDialogRef<CreatePostComponent>) { }

  ngOnInit(): void {
  }

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


  onPostClick(commentInput: HTMLTextAreaElement){
    // let comment = commentInput.value;
    // if(comment.length <= 0) return;
    // if(this.selectedProfilePhoto){
    //   this.uploadImagePost(comment);
    // }
    // else{
    //   this.uploadPost(comment);
    //
    // }

  }



}
