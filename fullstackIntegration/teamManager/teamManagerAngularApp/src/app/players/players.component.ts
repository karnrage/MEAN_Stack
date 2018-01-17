import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Player } from '../player';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

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
