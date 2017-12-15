import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
  },
  {
    path: 'new',
    pathMatch: 'full',
    component: NewproductsComponent,

  },
  {
    path: 'read',
    pathMatch: 'full',
    component: ProductsComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
