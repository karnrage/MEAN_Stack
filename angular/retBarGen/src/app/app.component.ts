import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ranBarGen';
  Rcolor = [];
  Gcolor = [];
  Bcolor = [];

  pushColors(){
    for(var i = 0; i < 6; i++)
      this.Rcolor.push(Math.floor(Math.random() * 255));
      // this.Gcolor.push(Math.floor(Math.random() * 255));
      // this.Bcolor.push(Math.floor(Math.random() * 255));
  }
  // 
  // colors = [BlueViolet, Chartreuse, Cyan, DarkOliveGreen, DodgerBlue]
}
