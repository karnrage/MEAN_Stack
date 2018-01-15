import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NoteShowComponent } from './note-show/note-show.component';
import { NoteEntryComponent } from './note-entry/note-entry.component';
import { NoteService } from './note.service';


@NgModule({
  declarations: [
    AppComponent,
    
    NoteShowComponent,
    NoteEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
