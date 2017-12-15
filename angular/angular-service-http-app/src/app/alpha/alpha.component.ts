// do the same in beta.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
//above- import the service
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  @Input() acctSet: Boolean;
  ghAcctData: any;
  ghScoreMsg: string = '';
  msgColor: string = '';  
  // tasks: any[] = [];
  // newTask = {} ;
//below, inject the service inside the constructer parenthesis
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.ghAcctData.subscribe(
      // (data) can be (x) or (whatever) => but needs to match {this.data = (match here)}
      (ghAcctData) => {this.ghAcctData = ghAcctData; ]
      this.setMessage();}
    );
  }

  //   onSubmit() {
  //      this._taskService.addTask(this.newTask);
  //      this.newTask = {};
  // }
  setMessage() {
    if (this.ghAcctData != "ERRORS") {
      let score = this.ghAcctData.public_repos + this.ghAcctData.followers;

      switch (true) {
        case (score < 20):
          this.ghScoreMsg = "Needs Work!";
          this.msgColor = "red";
          break;
        case (score < 50):
          this.ghScoreMsg = "A decent start!";
          this.msgColor = "orange";
          break;
        case (score < 100):
          this.ghScoreMsg = "Doing good!";
          this.msgColor = "black";
          break;
        case (score < 200):
          this.ghScoreMsg = "Great job!";
          this.msgColor = "green";
          break;
        case (score >= 200):
          this.ghScoreMsg = "GitHub Elite!";
          this.msgColor = "blue";
          break;
      }
    }
  }
}
