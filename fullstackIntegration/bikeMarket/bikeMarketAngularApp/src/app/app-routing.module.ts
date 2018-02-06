import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// MAKE SURE /login2/login2.component is ALL LOWERCASE!
import { RegisterComponent } from './register/register.component';
import { Login2Component } from './login2/login2.component';
// import { GameStatusComponent } from './game-status/game-status.component';
// import { GameComponent } from './game-status/game/game.component';


const routes: Routes = [
  // NO NEED TO LOAD THE BELOW, BECAUSE THE APPCOMPONENT LOADS BY DEFAULT
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: AppComponent,
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
