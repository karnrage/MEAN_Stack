import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { ProductsComponent } from './products/products.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { DataService } from './data.service';

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewproductsComponent,
    ProductsComponent,
    EditproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
