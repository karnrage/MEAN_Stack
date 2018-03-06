import { Injectable } from '@angular/core';
// below: my adds
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Bucket } from './bucket';
import { User } from './user';

@Injectable()
export class ApiService {
  userObserver: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userObserverData: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  userSet(lightswitch){
    this.userObserver.next(lightswitch);
  }

 updateData(newData:any): void{
    // this.bikeObserver.next(newData);
    this.userObserverData.next(newData);
  }

  newBucket(bucket:Bucket){
    console.log("where?: service: newBucket fxn")
    return this._http.post('/api/newBucket', bucket)
    .map(response => response.json())
    .toPromise()
  }

  regUser(user: User){
    console.log("where?: service: newUser fxn")
    return this._http.post('/api/newUser', user)
    .map(response => response.json())
    .toPromise()
  }

  showUser(){
    console.log("where?: service: showUser fxn")
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

  showbucketList(){
    console.log("where?: service: showbucketList fxn")
    return this._http.get('/api/showAllList')
    .map(response => response.json())
    .toPromise()
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

// Do not erase closing } below
}
