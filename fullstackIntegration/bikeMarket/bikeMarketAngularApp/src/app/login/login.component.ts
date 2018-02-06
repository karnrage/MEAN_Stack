import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { User } from '../user';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  returningUser = {};
  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("where?: login component : login fxn")
    this._marketService.logUser(this.user)
    // IF .then is redlined, then make sure to put "return" before this._http.post in service
         .then(response => this.returningUser = response)
         .then(response => {
  console.log("where?: inside login.component: login fxn: this._marketService.logUser(this.user)")

           if (response.loginAgain){
             return this._router.navigateByUrl('/')
           }
           else{
            //  change below back to "/browse"
             return this._router.navigateByUrl("/")
           }  
         })
          .catch(err => console.log(err))
    }

// LAST BRACE BELOW
}
