import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { CreateComponent } from './browse/create/create.component';
import { UserpageComponent } from './browse/userpage/userpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BrowseComponent,
    CreateComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
