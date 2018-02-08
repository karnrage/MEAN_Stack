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

  constructor(private _marketService: MarketService, private _route: ActivatedRoute, private _router: Router) { }
  
  bikeList : any[]=[];

  ngOnInit() {
  }

  logout(){
    console.log("where?: bike-links component: logout fxn")
    this._marketService.logoutinService();
    this._router.navigateByUrl('/');
  }
}
