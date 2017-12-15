import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrotherComponent } from './brother/brother.component';
import { SisterComponent } from './sister/sister.component';

import {MyServiceService} from './MyServiceService.service';


@NgModule({
  declarations: [
    AppComponent,
    BrotherComponent,
    SisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
