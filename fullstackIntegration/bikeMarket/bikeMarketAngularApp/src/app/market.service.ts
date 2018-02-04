import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import { Bike } from './bike';
import { User } from './user';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarketService {
  bikeObserver: BehaviorSubject<any[]>= new BehaviorSubject([]);
  userObserver: BehaviorSubject<any[]>= new BehaviorSubject([]);

  constructor(private _http: Http) { }

  currentData(newData:any): void{
    this.bikeObserver.next(newData);
    this.userObserver.next(newData);
  }

  newUser(user:User){
    this._http.post("/newUser", user)
        .subscribe
        (
          response =>
          {
            console.log("======getting to the service, before this.showplayers()====")
          this.showUsers()
          },
          error =>
          {
            console.log("======problem here====", error)
          }
        );
  }

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
