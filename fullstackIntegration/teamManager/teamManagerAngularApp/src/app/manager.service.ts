import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import { Player } from './player';

import 'rxjs/add/operator/toPromise';

let _dbUrl: string = "/mongoPlayers";

@Injectable()
export class ManagerService {
  playerObserver: BehaviorSubject<any[]>= new BehaviorSubject([]);

  constructor(private _http: Http) { }

  currentData(newData:any): void{
    this.playerObserver.next(newData);
  }

  newPlayer(player:Player){
    this._http.post(_dbUrl, player)
        .subscribe
        (
          response =>
          {
            console.log("======getting to the service, before this.showplayers()====")
          this.showPlayers()
          },
          error =>
          {
            console.log("======problem here====")
          }
        );
  }

  showPlayers(){
    this._http.get(_dbUrl)
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
