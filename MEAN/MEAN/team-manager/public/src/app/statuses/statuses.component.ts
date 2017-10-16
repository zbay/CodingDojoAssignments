import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
  game: number = 1;
  players = [];

  constructor(private _playersService: PlayersService, private _router: Router, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe(params => {
      this.game = parseInt(params.get('id'));
    });
  }

  ngOnInit() {
    this.getPlayers();
  }

  setStatus(id, newStatus){
    this._playersService.editStatus({_id: id, status: newStatus, game: this.game})
    .catch( err => { 
      console.log( "Error: StatusesComponent: setStatus:", err ); 
    })
    .then( (response) => {
      console.log(response);
      this.getPlayers();
    });
  }

  getPlayers(){
    this._playersService.getPlayers()
      .catch( err => { 
        console.log( "Error: ListComponent: getPlayers:", err ); 
      })
      .then( data => { 
        this.players = data;
        console.log(this.players);
      });
  }

}
