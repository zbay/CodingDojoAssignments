import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayersService {
  //players = [];

  constructor(private _http: Http) { }

  getPlayers(){
    return this._http.get('/players')
      .map((response) => response.json())
      .toPromise();
  }

  newPlayer(data){
    return this._http.post('/player', data)
      .map((response) => response.json())
      .toPromise();
  }

  deletePlayer(data){
    console.log(data);
    return this._http.post('/deletePlayer', data)
      .map((response) => response.json())
      .toPromise();
  }

  editStatus(data){
    return this._http.post('/status', data)
      .map((response) => response.json())
      .toPromise();
  }

}
