import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class DataService {

  productList: any [] = [];
  // list pro/con: more flexibility maybe; 
  // product = {}
  // object with w/e I want inside; 
  updatedProduct: Product;

  constructor() { }

  createProduct(product){
    console.log("before push");
    this.productList.push(product);
    console.log("after push");    
  }


  retrieveProducts(){
    return this.productList
  }
    
  removeProduct(index){
      this.productList.splice(index, 1)
  }
}
