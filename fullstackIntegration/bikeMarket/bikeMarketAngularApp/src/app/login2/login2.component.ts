import { Component, OnInit } from '@angular/core';
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
 
  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
  }
  login(){
    console.log("where?: login component : login fxn")
    this._marketService.logUserinService(this.logUser)
    // IF .then is redlined, then make sure to put "return" before this._http.post in service
         .then(response => this.returningUser = response)
         .then(response => {
  console.log("where?: inside login.component: login fxn: this._marketService.logUser(this.logUser)")

           if (response.loginAgain){
             return this._router.navigateByUrl('/')
           }
           else{
            //  change below back to "/browse"
             return this._router.navigateByUrl("/browse")
           }  
         })
          .catch(err => console.log(err))
    }
// LAST BRACE BELOW
}









