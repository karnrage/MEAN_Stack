import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switch:boolean = true;
  //must put variable outside so it lives outside of the function
  numbers = [0,1,2,3,4,5]
  ar=[false, false, false, false, false, false];

  on(i){
    // if(this.switch == false){
      if(this.ar[i] == false){
      //  this.switch = true;
      this.ar[i]=true;
    }
    else {
      // this.switch = false;
      this.ar[i] = false;
    }
  }
  
}
