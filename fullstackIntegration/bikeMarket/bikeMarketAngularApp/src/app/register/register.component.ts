import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // need to make below variable so angular knows the model its dealing with?
  user: User = new User();
  // createed a variable to hold the error message
  ErrMessage: string;
  valid = false;

  constructor(private _userService: MarketService, private _router: Router) { }

  ngOnInit() {
  }
  // res.json({'loggedinUserId': req.session.user, 'loggedinUserLastName': req.session.last, 'loggedinUserFirstName':req.session.first, 'loggedinUserEmail': req.session.email});
  
  register(){
    this._userService.newUser(this.user);
    // set a "flag" internally. set above
    //need to "subscribe" to the "observer"
    this._userService.userObserver.subscribe(data => {
  // if (data.logged != true){
    this.valid = true;
    this.user = new User();
    this.user.id = data.loggedinUserId
    this.user.email = data.loggedinUserEmail
    this.user.first= data.loggedinFirstName
    this.user.last= data.loggedinLastName
    // someone else had another logged in list of users here from market
    this._router.navigateByUrl('/')

    console.log(this.user)
  // }
  // else {
  //   console.log("reg failure here in reg comp fxn")
  //   this.ErrMessage = data.err;
  //   console.log(this.ErrMessage)
  // }
  })
  // .catch(err => this.ErrMessage = err.error)
  this._router.navigateByUrl('/')
  }


}
