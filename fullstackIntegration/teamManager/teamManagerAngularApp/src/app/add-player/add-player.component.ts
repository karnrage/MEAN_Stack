import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Player } from '../player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player = new Player();
  
  constructor(private _playerService: ManagerService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._playerService.newPlayer(this.player);
  }

}
