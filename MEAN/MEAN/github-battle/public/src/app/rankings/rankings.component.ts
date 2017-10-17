import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  users = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAll()
      .catch(err => { 
        console.log( "Error: RankingsComponent: getAll:", err ); 
      })
      .then((data) => {
        console.log(data);
        this.users = data;
      });
  }

}
