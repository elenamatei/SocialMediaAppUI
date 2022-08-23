import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrls: ['./birthday-card.component.css']
})
export class BirthdayCardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input( ) getBirthdays = { user:{id:"",  firstName:"", lastName:"",birthDate:""}, details:{profilePicture:""}};

  baseUrl = 'http://localhost:4200';
  profilePicture: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  id:string;


  ngOnInit(): void {
    this.isLoggedIn();

    if(this.getBirthdays.details == null){
      this.profilePicture = "/api/uploads/user.png";
    }
    else{
      this.profilePicture = this.getBirthdays.details.profilePicture;
    }
    this.id = this.getBirthdays.user.id;
    this.firstName = this.getBirthdays.user.firstName;
    this.lastName = this.getBirthdays.user.lastName;
    this.birthDate = this.getBirthdays.user.birthDate;

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

  async goToProfile(userId:String){
    await this.router.navigate(['/profile/'+ this.id ]);
  }

}
