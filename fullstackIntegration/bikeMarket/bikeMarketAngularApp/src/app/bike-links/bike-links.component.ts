import { Component, OnInit } from '@angular/core';
import { MarketService } from '../market.service';
import { User } from '../user';
import { Bike } from '../bike';
// 
import { ActivatedRoute } from '@angular/router';
// to use .navigateByUrl("/") below
import { Router } from '@angular/router'


@Component({
  selector: 'app-bike-links',
  templateUrl: './bike-links.component.html',
  styleUrls: ['./bike-links.component.css']
})
export class BikeLinksComponent implements OnInit {
  showBike: Bike[];
  showUser: User = new User();
  constructor(private _marketService: MarketService, private _route: ActivatedRoute, private _router: Router) { }
  
  bikeList : any[]=[];

  ngOnInit() {
    this.allBikes()
    // make fxn here to query all bikes
  }

  allBikes(){
    return  this._marketService.showBike().then(response => this.showBike = response)
  }
  
  logout(){
    console.log("where?: bike-links component: logout fxn")
    this._marketService.logoutinService();
    this._router.navigateByUrl('/');
  }
}
