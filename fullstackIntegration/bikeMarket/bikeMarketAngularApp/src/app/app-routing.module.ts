import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './Login/Login.component';
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
