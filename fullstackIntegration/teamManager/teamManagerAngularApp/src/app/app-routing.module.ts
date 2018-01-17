import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PlayersComponent } from './players/players.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GameStatusComponent } from './game-status/game-status.component';



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
  // need to add addplayercomp
  {
    path: 'addPlayer',
    pathMatch: 'full',
    component: AddPlayerComponent,
  },
  {
    path: 'status',
    pathMatch: 'full',
    component: GameStatusComponent,
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
