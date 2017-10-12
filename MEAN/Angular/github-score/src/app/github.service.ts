;import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class GithubService {
  githubData = {score: -1};

  constructor(private _http: Http) { }

  retrieveScore(username, callback){
    this._http.get('https://api.github.com/users/' + username).subscribe(
      (response: any)=> {
        response = response.json();
        this.githubData.score = response.followers + response.public_repos;
        console.log(this.githubData.score);
        callback(this.githubData);
      },
      (error)=>{
        console.log(error);
        this.githubData.score = undefined;
        callback(this.githubData);
      }
    );
  }

}
