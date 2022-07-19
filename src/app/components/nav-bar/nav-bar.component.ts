import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showToast: boolean = false;
  dropIsVisible:boolean = false;

  showCollapse(){

    this.showToast = !this.showToast;
    console.log(this.showToast);
  }

  showDrop(){
    this.dropIsVisible = !this.dropIsVisible;
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
