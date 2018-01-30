import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Note } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  note = new Note();

  constructor( private _taskservice: TaskService ) { }
  
    onSubmit(){
      console.log("===== Hit App Component =====")
      this._taskservice.createNote(this.note);
      this.note = new Note();
    }
}
