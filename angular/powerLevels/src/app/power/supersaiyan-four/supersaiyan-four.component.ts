import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-four',
  templateUrl: './supersaiyan-four.component.html',
  styleUrls: ['./supersaiyan-four.component.css']
})
export class SupersaiyanFourComponent implements OnInit {
  @Input() saiyanPower;
  multipliedSaiyan

  ngOnChanges(changes){
    if (changes.saiyanPower){
      this.multipliedSaiyan = 500*this.saiyanPower;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
