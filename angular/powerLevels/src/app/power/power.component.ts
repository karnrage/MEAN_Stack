import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  //variable needs to be defined in the class, outside the methods
  //okay define variable as below
  selectedPower;
  switch = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.switch = true;
    //when referring to the attribute ...need to put this."attribute"
    console.log(this.selectedPower);
  }

}
