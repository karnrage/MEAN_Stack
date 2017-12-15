import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  githubAcctSet: Boolean = false;
  // username: string;
  // score: any;
  setGitHubAcct(event) {
    this.githubAcctSet = true;
  }
}
