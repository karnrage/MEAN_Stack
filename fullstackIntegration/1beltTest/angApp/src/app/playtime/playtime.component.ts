import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-playtime',
  templateUrl: './playtime.component.html',
  styleUrls: ['./playtime.component.css']
})
export class PlaytimeComponent implements OnInit {

  questionsList: any [] = [];

  constructor(
    private _triviaService: TriviaService,     
    private _router: Router) { }

  ngOnInit() {
    // this.questionsList = this._triviaService.retrieveQuestions()
  }


  
}
