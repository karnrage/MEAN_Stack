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

user: any;
showBike: Bike[];
showUser: User = new User();

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
   this.allBikes();




    this._marketService.userObserverData.subscribe(
      (user) => {
        console.log("========looking for user in items component", user)
        this.user = user
        // for(let key of this.user){
        //   console.log(key)
        // }
        let userKeys = Object.keys(user);
        console.log(userKeys)
      }

   
    

    )
  }
 
allBikes(){
  return  this._marketService.showBike().then(response => this.showBike = response)
}

erase(item){
  
}

contact(item){
  
}

}
