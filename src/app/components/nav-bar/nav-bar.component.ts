import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router ) { }

  userId: string | null = "";

  ngOnInit(): void {

    this.userId = localStorage.getItem("user_id");
  }


  showToast: boolean = false;
  dropIsVisible:boolean = false;

  showCollapse(){

    this.showToast = !this.showToast;
  }

  showDrop(){
    this.dropIsVisible = !this.dropIsVisible;
  }

  async logout(){

    localStorage.setItem("token", "");
    localStorage.setItem("user_id", "");
    await this.router.navigate(['/home']);

  }


   // dropdown = document.getElementsByClassName('dropdown-menu');
   // clicked = document.getElementsByClassName('clicked');
   // showDrop = !showDrop;
   //
   //  if(this.showDrop == false){
   //    btn.addEventListener('click', function  showDropdown() {
   //      if (dropdown.style.display === 'none') {
   //        el.style.display = 'block';
   //      } else {
   //
   //        el.style.display = 'none';
   //
   //      }
   //    });
   //
   //  }


}
