import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TriviaService } from './trivia.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ScoresComponent } from './scores/scores.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { PlaytimeComponent } from './playtime/playtime.component';
import { NewQuestionComponent } from './new-question/new-question.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    PlayButtonComponent,
    PlaytimeComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
