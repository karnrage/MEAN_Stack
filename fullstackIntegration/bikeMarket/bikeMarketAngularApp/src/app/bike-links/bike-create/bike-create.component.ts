import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MarketService } from '../../market.service';
import { User } from '../../user';
import { Bike } from '../../bike';
// below only needed in AppModule
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls: ['./bike-create.component.css']
})
export class BikeCreateComponent implements OnInit {

createBike: Bike = new Bike();

  constructor(private _marketService: MarketService, private _router: Router) { }

  ngOnInit() {
  }

  create(){
    console.log("where?: bike-create component: create fxn")
    this._marketService.newBike(this.createBike)
      .then(response => this.createBike = response)
      .then(response =>{
        console.log("where?:inside bike-create comp: creat fxn: after reponse")
      if(response.error){
        console.log("error received an error from mongoose")
        return this._router.navigateByUrl('listings')
      }
      else{
        console.log(response)        
        return this._router.navigateByUrl("/browse")
      }
      })
      .catch(error => console.log(error))
  }
  
  logout(){
    console.log("where?: bike-edit component: logout fxn")
    this._marketService.logoutinService();
    this._router.navigateByUrl('/');
  }
  // BELOW:CLOSING BRACE FOR WHOLE EXPORT CLASS
}
