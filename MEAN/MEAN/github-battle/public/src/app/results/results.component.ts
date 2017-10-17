import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  userOne = {username: "", score: 0, avatarURL: ""};
  userTwo = {username: "", score: 0, avatarURL: ""};
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userOne = this._userService.getMatchup().first_place;
    this.userTwo = this._userService.getMatchup().second_place;
  }
}
