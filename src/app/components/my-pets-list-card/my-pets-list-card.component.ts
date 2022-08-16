import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-pets-list-card',
  templateUrl: './my-pets-list-card.component.html',
  styleUrls: ['./my-pets-list-card.component.css']
})
export class MyPetsListCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() getPets = {name:"", gender:"", id:"", picture:"", birthDate:""}

  name: String;
  gender: String;
  birthDate: string;
  petId: String;
  picture: String;
  user_id : string | null;
  baseUrl = 'http://localhost:4200';

  ngOnInit(): void {
    this.name = this.getPets.name;
    this.gender = this.getPets.gender;
    this.birthDate = this.getPets.birthDate;
    this.petId = this.getPets.id;
    this.picture = this.getPets.picture;

    this.user_id = localStorage.getItem("user_id");
  }

  async goToPet(petId:String){

    await this.router.navigate(['/petProfile/'+ this.user_id +'/'+ petId ]);
    console.log(this.name, this.petId );

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
