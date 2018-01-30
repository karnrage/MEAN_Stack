import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { ManagerService } from './manager.service';
import { GameComponent } from './game-status/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AddPlayerComponent,
    GameStatusComponent,
    
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
