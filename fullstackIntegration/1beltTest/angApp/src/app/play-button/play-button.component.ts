import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.css']
})
export class PlayButtonComponent implements OnInit {

question = {}

  constructor(
    private _triviaService: TriviaService,
    private _router: Router,
  ) { }

  // dont' need logic below, just use router link in html?
  // onSubmit(){
  //   this._triviaService.createQuestions(this.Trivia)    
  //   return this._router.navigateByUrl('read') 
  // }

  ngOnInit() {
  }

}
