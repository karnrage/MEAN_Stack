import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Landing/Landing.component';
// import { EditproductsComponent } from './Editproducts/Editproducts.component';
// import { NewproductsComponent } from './Newproducts/Newproducts.component';
// import { ProductsComponent } from './Products/Products.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingComponent,
    },
    // {
    //     path: 'edit/:index',
    //     pathMatch: 'full',
    //     component: EditproductsComponent,
    // },
    // {
    //     path: 'new',
    //     pathMatch: 'full',
    //     component: NewproductsComponent,
   
    // },
    // {
    //     path: 'read',
    //     pathMatch: 'full',
    //     component: ProductsComponent,
   
    // },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }