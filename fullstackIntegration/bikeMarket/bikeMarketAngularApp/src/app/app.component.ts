import { Component, OnInit, Output, Input } from '@angular/core';
// import /output from register and/or login to see if user has gotten "inside"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() 
  title = 'Cycle Market';
  // entryGranted:any <-- no need use session
  // call a/the session attribute to work if "!null" then *ngIf turn off the element
  // in 
  

}
