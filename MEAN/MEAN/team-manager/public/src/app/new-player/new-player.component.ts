import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayersService]
})
export class NewPlayerComponent implements OnInit {
  player = {name: "", position: ""}
  constructor(private _playersService: PlayersService, private _router: Router) { }

  ngOnInit() {
  }

  newPlayer(){
    this._playersService.newPlayer(this.player)      
      .catch( err => { 
        console.log( "Error: NewPlayerComponent: newPlayer:", err ); 
      })
      .then( () => {
        this._router.navigate(['/players/list']);
      });
  }

}
