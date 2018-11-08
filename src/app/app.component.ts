import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private appservice:AppService,private router:Router)
  {

  }
  showHideSideBar: boolean = true;
  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }
  ngOnInit()
  {
    if(!this.appservice.authenticated){
      this.router.navigateByUrl('/login')
    }
    else{
      this.router.navigateByUrl('/home')
    }
  }
}
