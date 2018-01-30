
import { TaskService } from './../task.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  // tasks: Note[] = [];
  allNotes = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    // this._taskService.tasksObserver.subscribe(
    //   tasks => this.tasks = tasks
      this._taskService.notesObserver.subscribe(
        (res) => {this.allNotes = res}
    );
    this._taskService.retrieveAll();
  }

}