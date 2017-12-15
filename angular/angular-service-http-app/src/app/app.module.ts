import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

import { TaskService } from './task.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,// <-- Include module in our AppModules
    HttpClientModule,// <-- registering the http client module
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
