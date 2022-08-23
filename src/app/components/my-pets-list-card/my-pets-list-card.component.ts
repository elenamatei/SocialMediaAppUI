import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-my-pets-list-card',
  templateUrl: './my-pets-list-card.component.html',
  styleUrls: ['./my-pets-list-card.component.css']
})
export class MyPetsListCardComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  @Input() getPets = {name:"", gender:"", id:"", picture:"", birthDate:""}

  name: String;
  gender: String;
  birthDate: string;
  petId: String;
  picture: String;
  user_id : string | null;
  urlId: string;
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {
    this.isLoggedIn();
    this.route.params.subscribe( res => {
      this.user_id = res["user_id"];

    } );


    this.name = this.getPets.name;
    this.gender = this.getPets.gender;
    this.birthDate = this.getPets.birthDate;
    this.petId = this.getPets.id;
    this.picture = this.getPets.picture;
  }


  async goToPet(petId:String){
    this.petId = petId;
    await this.router.navigate(['/petProfile/'+ this.user_id+'/'+ petId ]);
  }

  async isLoggedIn(){
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      await this.router.navigate(['/home']);
    }
  }

  ageFromBirthDate(birthDate: string): number {
    let today = new Date();
    let date = new Date(birthDate);
    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    return age;
  }

}
