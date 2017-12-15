import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css']
})
export class NewproductsComponent implements OnInit {

  product = {}  
  
    constructor(private _dataservice: DataService, private _router: Router) { }
  
    onSubmit(){
      this._dataservice.createProduct(this.product)    
      return this._router.navigateByUrl('read') 
    }
  
    ngOnInit() {
    }
  // below: need a function to call upon the function in the data.service.ts file
    newproducts(){
      console.log(this.product);
      this._dataservice.createProduct(this.product)
      this.product = new Product()
  
    }

}
