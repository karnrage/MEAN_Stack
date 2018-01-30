import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { GameComponent } from './game-status/game/game.component';



const routes: Routes = [
  // NO NEED TO LOAD THE BELOW, BECAUSE THE APPCOMPONENT LOADS BY DEFAULT
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: AppComponent,
  // },
  {
    path: 'players',
    pathMatch: 'full',
    component: PlayersComponent,
  },
  
  {
    path: 'addPlayer',
    pathMatch: 'full',
    component: AddPlayerComponent,
  },
  {
    path: 'status',
    component: GameStatusComponent,
      children: [{path: '', redirectTo: 'game/1', pathMatch: 'full'},
      {path: 'game/:id', component: GameComponent},
      ]
  },
  
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   component: AppComponent,
  //   children: [],
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
