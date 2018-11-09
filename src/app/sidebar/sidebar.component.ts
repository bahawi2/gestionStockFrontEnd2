import { Component, OnInit } from '@angular/core';
import { Principal } from '../shared/principal.model';
import { PrincipalState } from '../shared/principal.state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private principal: Principal;
  constructor(private store: Store<PrincipalState>) { }

  ngOnInit() {
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
      console.log("principale "+ principal);
    })
  }
 

}
