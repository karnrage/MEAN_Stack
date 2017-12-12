import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentTaskComponent } from './parent-task/parent-task.component';
import { BrotherComponent } from './parent-task/brother/brother.component';
import { SisterComponent } from './parent-task/sister/sister.component';
//need to capitalize "whatever" or won't work
import { WhateverService } from './parent-task/whatever.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentTaskComponent,
    BrotherComponent,
    SisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WhateverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
