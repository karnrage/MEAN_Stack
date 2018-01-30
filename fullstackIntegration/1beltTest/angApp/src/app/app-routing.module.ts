import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ScoresComponent } from './scores/scores.component';
import { PlaytimeComponent } from './playtime/playtime.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
  {
    path: 'scores',
    pathMatch: 'full',
    component: ScoresComponent,

  },
  {
    path: 'play',
    pathMatch: 'full',
    component: PlaytimeComponent,

  },
  {
    path: 'add',
    pathMatch: 'full',
    component: PlaytimeComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
