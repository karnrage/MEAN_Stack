import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// MAKE SURE /login2/login2.component is ALL LOWERCASE!
import { RegisterComponent } from './register/register.component';
import { Login2Component } from './login2/login2.component';
// import { GameStatusComponent } from './game-status/game-status.component';
// import { GameComponent } from './game-status/game/game.component';
import { BikeLinksComponent } from './bike-links/bike-links.component';
import { BikeCreateComponent } from './bike-links/bike-create/bike-create.component';
// below is nested in above component. 
import { BikeEditComponent } from './bike-links/bike-create/bike-edit/bike-edit.component';
import { BikeItemsComponent } from './bike-links/bike-items/bike-items.component';

const routes: Routes = [
  // NO NEED TO LOAD THE BELOW, BECAUSE THE APPCOMPONENT LOADS BY DEFAULT
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: LandingComponent,
  // },
  // {
  //   path: 'logoff',
  //   pathMatch: 'full',
  //   redirectTo: '/',
  // },
  {
    path: 'browse',
    pathMatch: 'full',
    component: BikeLinksComponent,
        children: [
                {path: 'browse', redirectTo: 'browse'},
                ]
  },
  // if you do not want the URL to stack like browse/listings, but just be /listings, then cannot be child. Separated out below
  {
    path: 'listings',
    component: BikeCreateComponent
  },

  // {
  //   path:'**',
  //   pathMatch:'full',
  //   component:AppComponent,
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
