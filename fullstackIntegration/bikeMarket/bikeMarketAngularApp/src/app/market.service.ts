import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import { Bike } from './bike';
import { User } from './user';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarketService {
  // bikeObserver: BehaviorSubject<any[]>= new BehaviorSubject([]);
  userObserver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  userSet(lightswitch){
    this.userObserver.next(lightswitch);
  }

  constructor(private _http: Http) { }

  currentData(newData:any): void{
    // this.bikeObserver.next(newData);
    this.userObserver.next(newData);
  }

  regUser(user:User){
    // need return with promises
    console.log("where?: service : regUser fxn")
    return this._http.post("/api/newUser", user)
        .map(response => response.json())
        .toPromise()
        
  }

  logUserinService(user:User){
    // need return with promises
    console.log("where?: service :  logUser fxn")
    //must do as below. new Promise is saying I will do what you want me to do
    // however you must wait for me to get the info back to you.
    return new Promise((resolve, reject) => {
      this._http.post("/api/logUser", user)
        .map(response => response.json())
        .toPromise()
        .then(response => {
            if ( "sessionUser" in response){
              this.userSet(true)
              resolve(response);
            }
            else {
              reject(response);
            }
          });
      }
    )
        
  }

  logoutinService(){
    // need return with promises
    console.log("where?: service :  logout fxn")
    this._http.get("/api/logout")
    //this below only sets the observable status. Changes happen in the component
      .subscribe(
        response =>
        {
        this.userSet(false) 
        // this.currentData(response.json())
        console.log("======inside logoutinService: subscribe fxn after userset(false)====")
        },
        error => this.currentData("=========ERROR: WHERE? logoutinService .subscribe====")
      )
  }
        // .map(response => response.json())
        // .toPromise()
        
 

  // newUser(user:User){
  //   this._http.post("/api/newUser", user)
  //       .subscribe
  //       (
  //         response =>
  //         {
  //           console.log("======getting to the service, before this.showplayers()====")
  //         this.showUsers()
  //         },
  //         error =>
  //         {
  //           console.log("======problem here====", error)
  //         }
  //       );
  // }

  showBikes(){
    // no subscribe with promises
    // this._http.get("/showBikes")
    //     .subscribe(
    //       response =>
    //       {
    //         this.currentData(response.json())
    //       },
    //       error =>
    //         this.currentData("=========ERROR here=======fix it!")
    //     )
  }
}
