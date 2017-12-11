import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-three',
  templateUrl: './supersaiyan-three.component.html',
  styleUrls: ['./supersaiyan-three.component.css']
})
export class SupersaiyanThreeComponent implements OnInit {
  @Input() saiyanPower;
  multipliedSaiyan

  ngOnChanges(changes){
    if (changes.saiyanPower){
      this.multipliedSaiyan = 250*this.saiyanPower;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
