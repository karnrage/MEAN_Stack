import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { User } from '../user';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // need to make below variable so angular knows the model its dealing with?
  user: User = new User();
  entryGranted = false;
  // below createed a variable to hold the error message
  ErrMessage: string;
  newUser = {};

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
  }
  // res.json({'loggedinUserId': req.session.user, 'loggedinUserLastName': req.session.last, 'loggedinUserFirstName':req.session.first, 'loggedinUserEmail': req.session.email});
  
  register(){
    console.log("where?: register component : register fxn")
    this._marketService.regUser(this.user)
    // IF .then is redlined, then make sure to put "return" before this._http.post in service
         .then(response => this.newUser = response)
         .then(response => {
  console.log("where?: inside register.component: register fxn: this._marketService.regUser(this.user)")

           if (response.loginAgain){
             return this._router.navigateByUrl('/')
           }
           else{
            //  change below back to "/browse"
            //  var entryGranted = true;
            // do this : set in session. 
             return this._router.navigateByUrl("/browse")
           }  
         })
          .catch(err => console.log(err))
    }

// BELOW:CLOSING BRACE FOR WHOLE EXPORT CLASS
}


    // set a "flag" internally. set above
    //need to "subscribe" to the "observer"
  //   this._userService.(data => {
  // if (data.logged != true){
  //   this.valid = true;
  //   this.user = new User();
  //   this.user.id = data.loggedinUserId
  //   this.user.email = data.loggedinUserEmail
  //   this.user.first= data.loggedinFirstName
  //   this.user.last= data.loggedinLastName
    // someone else had another logged in list of users here from market
    // this._router.navigateByUrl('/')

    // console.log(this.user)
  // }
  // else {
  //   console.log("reg failure here in reg comp fxn")
  //   this.ErrMessage = data.err;
  //   console.log(this.ErrMessage)
  // }
  // })
  // .catch(err => this.ErrMessage = err.error)
  // this._router.navigateByUrl('/')
 