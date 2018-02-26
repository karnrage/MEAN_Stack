import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MarketService } from '../../../market.service';
import { User } from '../../../user';
import { Bike } from '../../../bike';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.css']
})
export class BikeEditComponent implements OnInit {
 
  showBike: Bike[];
  myBike: Bike;
  showUser: User = new User();

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
    this.allBikes();
    this.myBike = new Bike;
  }

  allBikes(){
    console.log("where?:inside bike-edit: allBikes fxn")
    return  this._marketService.showBike().then(response => this.showBike = response)
  }

  editBike(myBike){
    console.log("where?:inside bike-edit: edit fxn")
    this._marketService.edit(myBike)
    .then(response => this.ngOnInit())
    .then(response => {
      console.log("where?:inside bike-edit comp: edit fxn: after reponse")
      if(response.error){
        console.log("error received an error from mongoose")
        return this._router.navigateByUrl('/browse')
      }
      else{
        console.log(response)        
        return this._router.navigateByUrl('listings')
      }
    })
    .catch(error => console.log(error))
  }
}
