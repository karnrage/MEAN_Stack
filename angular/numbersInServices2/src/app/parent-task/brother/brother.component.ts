import { Component, OnInit } from '@angular/core';
import { WhateverService } from '../whatever.service';
// import { WhateverService } from '/src/app/whatever.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _whateverService: WhateverService) { }

  ngOnInit() {
    this.numbers = this._whateverService.retrieveNumbers();
  }


  pushOne(){
    this._whateverService.addNumber(1);
  }


}
