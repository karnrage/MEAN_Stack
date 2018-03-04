import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// MAKE SURE /login2/login2.component is ALL LOWERCASE!
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    // path: 'browse',
    // pathMatch: 'full',
    // component: BikeLinksComponent,
    //     children: [
    //             {path: 'browse', redirectTo: 'browse'},
    //             ]
  },
  // if you do not want the URL to stack like browse/listings, but just be /listings, then cannot be child. Separated out below
  // {
  //   path: 'listings',
  //   component: BikeCreateComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
