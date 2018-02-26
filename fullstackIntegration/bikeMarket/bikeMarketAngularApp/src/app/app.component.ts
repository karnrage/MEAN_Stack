import { Component, OnInit, Output, Input } from '@angular/core';
// import /output from register and/or login to see if user has gotten "inside"
import { MarketService } from './market.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cycle Market';
  // @Output() myLoginReceived; not needed
  logged :boolean = false ;


  // serviceWayDataloggedIn = {};
  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
    console.log("Is a user logged in? " + this.logged)
  this._marketService.userObserver.subscribe(
    dataTemp => {
      this.logged = dataTemp;
    }
  )
  }
  
  // entryGranted:any <-- no need, use session
  // call a/the session attribute to work if "!null" then *ngIf turn off the element
  // in 

  dataFromLogin2(event){    
    console.log("where?: app.component: datafromlogin");
    console.log("data from login2", event);
    // IMPORTANT: need to use proper scoping to work
    // before had "let logged = true"
    this.logged = true;
  }
  

}
