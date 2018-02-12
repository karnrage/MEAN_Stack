import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { MarketService } from '../market.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  logUser: User = new User();
  returningUser = {};
  loggedIn = {};
  // loggedIn = false;

  //below: created to send info back to parent
  // @Output() myLoginEvent = new EventEmitter();
  // @Output() myLoginEvent = new EventEmitter<boolean>()
 
  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
  }
  login(event){
    console.log("where?: login component : login fxn")
    // IF .then is redlined, then make sure to put "return" before this._http.post in service
    this._marketService.logUserinService(this.logUser)
         .then(response => this.returningUser = response)
         .then(response => {
  console.log("where?: inside login.component: login fxn: this._marketService.logUser(this.logUser)")

           if ("loginAgain" in response){
             return this._router.navigateByUrl('/')
           }
           else{
             console.log(response);
            //  this.loggedIn = response.sessionUser;
            //  this.myLoginEvent.emit(this.loggedIn);   
            // SADLY ABOVE NO LONGER NEEDED   
             //  change below back to "/browse" after get login to work
            return this._router.navigateByUrl("browse")
           }  
         })
          .catch(err => console.log(err))
    }
// LAST BRACE BELOW
}









