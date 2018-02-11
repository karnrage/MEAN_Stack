import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MarketService } from './market.service';
import { RegisterComponent } from './register/register.component';
import { Login2Component } from './login2/login2.component';
import { BikeLinksComponent } from './bike-links/bike-links.component';
import { LandingComponent } from './landing/landing.component';
import { BikeItemsComponent } from './bike-links/bike-items/bike-items.component';
import { BikeCreateComponent } from './bike-links/bike-create/bike-create.component';
import { BikeEditComponent } from './bike-links/bike-create/bike-edit/bike-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    Login2Component,
    BikeLinksComponent,
    LandingComponent,
    BikeItemsComponent,
    BikeCreateComponent,
    BikeEditComponent,
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
