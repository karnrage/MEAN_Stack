import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Player } from '../player';


@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {

  constructor(private _managerService: ManagerService) { }

  playerList : any[]=[];

  ngOnInit() {
    this._managerService.showPlayers();
    this._managerService.playerObserver.subscribe(
      (playerData)=>{
        console.log("player data gathered or updated")
        console.log(playerData); 
        this.playerList = playerData; 
      }
    )
  }

}
