import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-h2h',
  templateUrl: './h2h.component.html',
  styleUrls: ['./h2h.component.css']
})
export class H2hComponent implements OnInit {

  userOne = {username: undefined, score: undefined, avatarURL: undefined};
  userTwo = {username: undefined, score: undefined, avatarURL: undefined};
  usernameOne: string = "";
  usernameTwo: string ="";
  notFoundOne = false;
  notFoundTwo = false;

  constructor(private _userService: UserService) { }

  ngOnInit() {}

  addUser(num){
    if(num === 1){
      this._userService.getData(this.usernameOne, (userData) => {
        if(userData.status !== 404){
          this.notFoundOne = false;
          this.userOne = userData; // make sure to add an error for nonexistent users!
          if(this.userTwo.username){
            this.bothUsers();
          }
        }
        else{
          this.notFoundOne = true;
        }
      });
    }
    if(num === 2){
      this._userService.getData(this.usernameTwo, (userData) => {
        if(userData.status !== 404){
          this.notFoundTwo = false;
          this.userTwo = userData; // make sure to add an error for nonexistent users!
          if(this.userOne.username){
            this.bothUsers();
          }
        }
        else{
          this.notFoundTwo = true;
        }
      });
    }
  }
  
  bothUsers(){
    this._userService.setMatchup(this.userOne, this.userTwo);
  }
}
