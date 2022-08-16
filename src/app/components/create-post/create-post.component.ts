import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  selectedProfilePhoto: File;
  selectedPhotoString: String;
  text: String;
  postDate : String;

 // @Output("refreshPageAfterPost") refreshPage : EventEmitter<any> = new EventEmitter();



  constructor(private dialog:MatDialogRef<CreatePostComponent>, private router: Router) { }

  ngOnInit(): void {
  }



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
  async onPostClick(){
    let resultAxios = (await axios.post('http://localhost:4200/api/createPost',
      {
        "picture":this.selectedPhotoString,
        "text": this.text,
        "postDate": this.postDate,
        "token": localStorage.getItem("token")

      },
      {
        headers: { 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': '*/*'}

      })).data;
    // this.refreshPage.emit();
    // await this.router.navigate(['/feed']);
    //
    // if(resultAxios.addedPost) {
    //   await this.router.navigate(['/feed']);
    // }

  }

}



