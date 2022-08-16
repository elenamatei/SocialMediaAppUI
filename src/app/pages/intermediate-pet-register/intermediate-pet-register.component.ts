import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-intermediate-pet-register',
  templateUrl: './intermediate-pet-register.component.html',
  styleUrls: ['./intermediate-pet-register.component.css']
})
export class IntermediatePetRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hasPet: String;

  async continue(){
    if(this.hasPet == "yes"){
     await this.router.navigate(['/registerPet']);
    } else {
     await this.router.navigate(['/feed']);
    }
  }

}
