import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule


import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { SupersaiyanTwoComponent } from './power/supersaiyan-two/supersaiyan-two.component';
import { SupersaiyanThreeComponent } from './power/supersaiyan-three/supersaiyan-three.component';
import { SupersaiyanFourComponent } from './power/supersaiyan-four/supersaiyan-four.component';


@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyanTwoComponent,
    SupersaiyanThreeComponent,
    SupersaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,// <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
