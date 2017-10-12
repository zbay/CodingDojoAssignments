import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";
  score: number = undefined;
  constructor(private _githubService: GithubService){

  }

  onSubmit(){
    this._githubService.retrieveScore(this.username, (response) => {
      this.score = response.score;
    });
  }

}
