import { Component, OnInit, Output, Input } from '@angular/core';
import { AaService } from './aa.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belt Test';

  logged :boolean = false ;
  
  
    // serviceWayDataloggedIn = {};
    constructor(private _aaService: AaService, private _router: Router) { }
  
    // ngOnInit() {
    //   console.log("Is a user logged in? " + this.logged)
    // this._aaService.userObserver.subscribe(
    //   dataTemp => {
    //     this.logged = dataTemp;
    //   }
    //   )
    // } 
  
    // dataFromLogin2(event){    
    //   console.log("where?: app.component: datafromlogin");
    //   console.log("data from login2", event);
    //   // IMPORTANT: need to use proper scoping to work
    //   // before had "let logged = true"
    //   this.logged = true;
    // }
  
}
