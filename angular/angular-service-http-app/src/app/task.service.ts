import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
//Rxjs?
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { HttpClientModule } from '@angular/common/http'; // this or below?
import { HttpClient } from '@angular/common/http'; // this or above?

@Injectable()
export class TaskService {
  githubAccountSpec: BehaviorSubject<any[]> = new BehaviorSubject([]);
  // userInfo: number;

  // constructor(private _http: HttpClientModule ) {} 
  // try above if below doesn't work
  // constructor(private _http: HttpClient) {
    constructor(private _http: Http) { 
    // this.retrieveTask();
  }

  // retrieveTask() {
  //   this._http.get('https://00000000000000000000000.mockapi.io/task').subscribe(
  //     (task: any[]) => { this.tasks.next(task); }
  //   );
  // }

  // addTask( newTask: any){ 
  //   this._http.post('https://00000000000000000000000.mockapi.io/task', newTask).subscribe(
  //       (response) => { this.retrieveTask(); }
  //     );
  //   }

 

  updateGitScoreData(newData: any): void {
    // const tempData = this.githubAccountSpec.getValue();
    // tempData.push(newData);
    this.githubAccountSpec.next(newData);
  }

  // This talks to the API or, in future cases, the DB
  getGitHubAccount(username){
    let url: string = "https://api.github.com/users/" + username;
    // return this._http.get(`https://api.github.com/users/${username}`)
    let jsonObj = this._http.get(url)
    .map(response  => response .json())
    .subscribe(
      response => this.updateGitScoreData(response),
      error => this.updateGitScoreData("ERROR")
    )
    // .toPromise();
  }

}
  