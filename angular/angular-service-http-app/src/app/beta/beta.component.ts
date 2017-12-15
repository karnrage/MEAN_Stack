
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
//above- import the service
@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
    tasks: any[] = [];
//below, inject the service inside the constructer parenthesis
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.tasks.subscribe(
      // (data) can be (x) or (whatever) => but needs to match {this.data = (match here)}
      (data) => {this.tasks = data; }
    );
  }

}
