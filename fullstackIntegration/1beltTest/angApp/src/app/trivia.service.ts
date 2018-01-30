import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other below?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".

import { Trivia } from './trivia';
import { User } from './user';


@Injectable()
export class TriviaService {

Trivia: Trivia;
TriviaList: any[]=[];
loginList = [];
readList=[];
currentUser: User;

  constructor(private _http: Http) { }



createUser(user){
  console.log("========inside createUser=====");
  return this._http.post('api/register', user)
  .map(response => response.json())
  .toPromise();
}

retrieveQuestions(){
  console.log("========inside retreive question=====");
  return this._http.get('api/allQuestions')
  .map(response => response.json())
  .toPromise();
}

createQuestions(Question: Trivia){
  console.log("createQuestion ON triviaservice")
  return this._http.post('api/addQuestions/user.id', Question)
  .map(response => response.json())
  .toPromise();
}



// last brace below
}