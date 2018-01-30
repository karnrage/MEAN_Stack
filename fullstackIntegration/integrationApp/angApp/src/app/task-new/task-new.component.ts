import { Note } from './../task';
import { TaskService } from './../task.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskNewComponent implements OnInit {
  newTask: Note = new Note();

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(note: Note) {
    this._taskService.createNote(this.newTask);
    this.newTask = new Note();
  }

}