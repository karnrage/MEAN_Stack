import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-entry',
  templateUrl: './note-entry.component.html',
  styleUrls: ['./note-entry.component.css']
})
export class NoteEntryComponent implements OnInit {
  note: Note = new Note();
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }
  onsubmit(){
    this._noteService.newNote(this.note);
  }
}
