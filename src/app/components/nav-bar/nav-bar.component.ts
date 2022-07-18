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

  showCollapse(){
    console.log("a intrat");
    this.showToast = !this.showToast;
    console.log(this.showToast);
  }
}
