import { Component, OnInit } from '@angular/core';
import { WhateverService } from '../whatever.service';

@Component({
  selector: 'app-sister',
  templateUrl: './sister.component.html',
  styleUrls: ['./sister.component.css']
})
export class SisterComponent implements OnInit {
  numbers: number[] = [];
  
  constructor(private _whateverService: WhateverService) { }

  ngOnInit() {
    this.numbers = this._whateverService.retrieveNumbers();
  }

  pushOne(){
    this._whateverService.addNumber(1);
  }

}
