import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
 matchup = {first_place: undefined, second_place: undefined};
 apiToken = "5bbb373a96fe16fd63e4e4ecce8bf37c39239658";

  constructor(private _http: Http) { }


  getData(username, callback){
    let githubData = {score: -1, username: "", avatarURL: ""};    
    this._http.get('https://api.github.com/users/' + username + "?access_token=" + this.apiToken).subscribe(
      (response: any)=> {
        response = response.json();
        githubData.score = response.followers + response.public_repos;
        githubData.username = username;
        githubData.avatarURL = response.avatar_url;
        console.log("posting new player, maybe?");
        this._http.post('/player', githubData)
          .map((response) => response.json())
          .toPromise();
        callback(githubData);
      },
      (error)=>{
        console.log(error);
        githubData.score = undefined;
        githubData.username = undefined;
        githubData.avatarURL = undefined;
        callback(error);
      }
    );
  }

  getAll(){
    return this._http.get("/players")
      .map((response) => response.json())
      .toPromise();
  }

  setMatchup(user1, user2){
    if(user2.score > user1.score){ // put the users in order of score
      let temp = user1;
      user1 = user2;
      user2 = temp;
    }
    this.matchup.first_place = user1;
    this.matchup.second_place = user2;
    console.log(this.matchup);
  }

  getMatchup(){
    console.log(this.matchup);
    return this.matchup;
  }
}
