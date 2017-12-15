import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';  

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products = this._dataservice.retrieveProducts()


    constructor(private _dataservice: DataService) { }

  deleteProduct(index){
    this._dataservice.removeProduct(index)
    //  upper line this is referring to data service from constructor
    // after this then the dot . is an operator when leads to
    // DataService where another . operator gets the function
    // from service of "removeProduct"
  }

  ngOnInit() {
  }

}
