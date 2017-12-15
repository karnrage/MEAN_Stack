import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';


@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
// attempt with empty object, 2 way binding will? populate with attributes
  product = {
    // title: '',
    // price: '',
    // imgsrc: ''
  }

  index = ''

  // constructor(private _dataservice: DataService, private _route: ActivatedRoute) { 
  //     this._route.paramMap.subscribe( params => {
  //     this.product = this._dataservice.findProduct(params.get('index'))
  //     this.index = params.get('index')
  //   })
  // }

  // onSubmit(){
  //   this._dataservice.editProducts(this.index, this.product)
  // }

  ngOnInit() {
  }

  // editproducts(){
  //   console.log(this.product);
  //   this.product = this._dataservice.editProducts(this.index, this.product);
  //   this.product = {
  //     title: '',
  //     price: '',
  //     imgsrc: ''
  //   }
  // }

}
