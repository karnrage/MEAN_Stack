import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { CreateComponent } from './browse/create/create.component';
import { UserpageComponent } from './browse/userpage/userpage.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'browse',
    
    component: BrowseComponent,
      children: [
        {path: 'browse', redirectTo: 'browse'},
        ]
  },
  {
    path: 'listings',
    component: CreateComponent
  },
  {
    path: 'userpage/:id',
    component: UserpageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
