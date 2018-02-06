import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MarketService } from './market.service';
import { RegisterComponent } from './register/register.component';
import { Login2Component } from './login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
