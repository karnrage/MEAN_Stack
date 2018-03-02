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
  userObserverData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  
  // new data is called lightswitch, and is being placed inthe userObserver Observable
  userSet(lightswitch){
    this.userObserver.next(lightswitch);
  }

  constructor(private _http: Http) { }

 updateData(newData:any): void{
    // this.bikeObserver.next(newData);
    this.userObserverData.next(newData);
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
              this.updateData(response)
              console.log("==================here in service",response)
              return resolve(response);
            }
            else {
              return reject(response);
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
        this.updateData(null)
        // this.currentData(response.json())
        console.log("======inside logoutinService: subscribe fxn after userset(false)====")
        },
        error => this.updateData("=========ERROR: WHERE? logoutinService .subscribe====")
      )
  }
        // .map(response => response.json())
        // .toPromise()

  newBike(bike:Bike){
    console.log("where?: service: createBike fxn")
    return this._http.post('/api/newBike', bike)
    .map(response => response.json())
    .toPromise()
  }
        
  showBike(){
    console.log("where?: service: showBike fxn")
    return this._http.get('/api/showAll')
    .map(response => response.json())
    .toPromise()
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

  edit(myBike){
    console.log("where?: service: edit fxn")
    console.log("Testing!: in service: edit: ", myBike)
    console.log("inside service: edit: after myBike console.log")
    return this._http.post('/api/edit', myBike)
    .map(response => response.json())
    .toPromise()
  }

  // input parameter ok?
  erase(eraseData:Bike){
    console.log("where?:inside bike-edit component: erase fxn")
    console.log("console logging erase data:", eraseData)
    return this._http.post('/api/erase', eraseData)
    .map(response => response.json())
    .toPromise()
    
  }

}
// above: made correction with error:"ERROR in src/app/market.service.ts(105,12): error TS2554: Expected 2-3 arguments, but got 1." I forgot to pass in the data to the back end

// IMPORTANT!!! DO NOT COMMENT BETWEEN .MAP OR .TOPROMISE
// DO NOT COMMENT BETWEEN FUNCTION CHAINING