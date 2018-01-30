import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { Player } from '../../player';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _managerService: ManagerService, private _route: ActivatedRoute,) { }

  game: any;
  playerList : any[]=[];

  ngOnInit() {

    this._managerService.showPlayers();
    this._managerService.playerObserver.subscribe(
      (playerData)=>{
        console.log("INSIDE GAME COMPONENT player data gathered or updated")
        console.log(playerData); 
        this.playerList = playerData; 
      }
    )

    this.game="g1"

    this._route.params.subscribe(params => {
      this.game = 'g' + params['id']
      console.log("===INSIDE _ROUTE.PARAMS.SUBSCRIBE IN GAME.COMPONENT")
      console.log( 'g' + params['id'])
    })

  }

    changeState(id, state){
      //PARAMETER ORDER MATTERS WHEN SENDING TO SERVICE
      this._managerService.changeState(state, this.game, id);
      console.log(id);
      // this._managerService.playerObserver.subscribe(
      //   (playerData)=>{
      //     console.log("changeState: player state gathered/updated")
      //     console.log(playerData); 
      //     this.playerList = playerData; 
      console.log("INSIDE GAME COMP; CHANGESTATE FXN; BEFORE SHOW PLAYERS CALL");
      this._managerService.showPlayers();
      // });
    }

  }


