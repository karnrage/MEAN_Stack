import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {



  constructor(
    private _triviaService: TriviaService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

}
