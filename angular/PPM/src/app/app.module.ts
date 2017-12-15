import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
// import { ProductsComponent } from './products/products.component';
// import { EditproductsComponent } from './editproducts/editproducts.component';
// import { NewproductsComponent } from './newproducts/newproducts.component';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    // ProductsComponent,
    // EditproductsComponent,
    // NewproductsComponent,
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
