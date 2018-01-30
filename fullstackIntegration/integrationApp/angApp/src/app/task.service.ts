import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './task';

@Injectable()
export class TaskService {
  notesObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retrieveAll() {
    this._http.get('/notes').subscribe(
      n => this.notesObserver.next(n.json()),
      errorResponse => console.log(errorResponse)
    );
  }

  createNote(note: Note) {
    console.log('=====entered createNote in Service=======')
    this._http.post('/notes', note).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    );
  }

}