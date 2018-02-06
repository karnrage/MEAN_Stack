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
  // userObserver: BehaviorSubject<any[]>= new BehaviorSubject([]);

  constructor(private _http: Http) { }

  currentData(newData:any): void{
    // this.bikeObserver.next(newData);
    // this.userObserver.next(newData);
  }

  regUser(user:User){
    // need return with promises
    console.log("where?: service : regUser fxn")
    return this._http.post("/api/newUser", user)
        .map(response => response.json())
        .toPromise()
        
  }

  logUser(user:User){
    // need return with promises
    console.log("where?: service :  logUser fxn")
    return this._http.post("/api/logUser", user)
        .map(response => response.json())
        .toPromise()
        
  }

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

  showUsers(){
    this._http.get("/showUsers")
        .subscribe(
          response =>
          {
            this.currentData(response.json())
          },
          error =>
            this.currentData("=========ERROR here=======fix it!")
        )
  }
}
