import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
