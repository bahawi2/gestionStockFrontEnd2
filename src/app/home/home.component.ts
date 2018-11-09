import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  showHideSideBar: boolean = true;
  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }

}