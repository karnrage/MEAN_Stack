import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  constructor(private _managerService: ManagerService, private _route: ActivatedRoute,) { }


  game: any;
  playerList : any[]=[];


  ngOnInit() {

    // this._managerService.showPlayers();
    // this._managerService.playerObserver.subscribe(
    //   (playerData)=>{
    //     console.log("player data gathered or updated")
    //     console.log(playerData); 
    //     this.playerList = playerData; 
    //   }
    // )

    this.game="g1"

    // commented below out just to get to work. will not work no params
    // this._route.params.subscribe(params => {
    //   this.game = 'g' + params['id']
    //   console.log('g' + params['id'])
    // })

  }

  changeState(id, newState){
    this._managerService.changeState(id, this.game, newState);
    // this._managerService.playerObserver.subscribe(
    //   (playerData)=>{
    //     console.log("changeState: player state gathered/updated")
    //     console.log(playerData); 
    //     this.playerList = playerData; 
    this._managerService.showPlayers();
    // });
  }

}
