import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [PlayersService]
})
export class ListComponent implements OnInit {
  players = [];
  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    this._playersService.getPlayers()
      .catch( err => { 
        console.log( "Error: ListComponent: getPlayers:", err ); 
      })
      .then( data => { 
        this.players = data;
      });
  }

  deletePlayer(id){
    this._playersService.deletePlayer({_id: id})
      .catch( err => { 
        console.log( "Error: ListComponent: deletePlayer:", err ); 
      })
      .then( data => { 
        this.getPlayers();
      });
  }

}
