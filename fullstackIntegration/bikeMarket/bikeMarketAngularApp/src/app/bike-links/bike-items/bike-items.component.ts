import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MarketService } from '../../market.service';
import { User } from '../../user';
import { Bike } from '../../bike';

@Component({
  selector: 'app-bike-items',
  templateUrl: './bike-items.component.html',
  styleUrls: ['./bike-items.component.css']
})
export class BikeItemsComponent implements OnInit {

showBike: Bike[];
showUser: User = new User();

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
   this.allBikes()


    // this._marketService.userObserverData.subscribe(
    //   (userObserverData) => {this.showUser = userObserverData}
    // )
  }
 
allBikes(){
  return  this._marketService.showBike().then(response => this.showBike = response)
}

}
