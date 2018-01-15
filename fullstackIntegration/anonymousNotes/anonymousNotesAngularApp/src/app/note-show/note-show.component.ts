import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-show',
  templateUrl: './note-show.component.html',
  styleUrls: ['./note-show.component.css']
})
export class NoteShowComponent implements OnInit {
  
  constructor(private _noteService: NoteService) {  }

  noteList : any[]=[];

  ngOnInit() {
  }



}
