import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import 'rxjs/add/operator/map';
import { Note } from './note';

import 'rxjs/add/operator/toPromise';

let _dbUrl: string = "/mongoNotes";

@Injectable()
export class NoteService {
  noteObserver: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  currentData(newData:any): void{
    this.noteObserver.next(newData);
  }

  newNote(note:Note){
    this._http.post(_dbUrl, note)
        .subscribe
        (
          response =>
          {
            console.log("======getting to the service, before this.shownotes()====")
          this.showNotes()
          },
          error =>
          {
            console.log("======problem here====")
          }
        );
  }

  showNotes(){
    this._http.get(_dbUrl)
        .subscribe(
          response =>
          {
            this.currentData(response.json())
          },
          error =>
            this.currentData("ERROR")
        )
  }

}
