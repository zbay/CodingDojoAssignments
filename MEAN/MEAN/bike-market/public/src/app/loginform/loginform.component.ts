import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  user = {email: "", password: ""}
  errorMsg = undefined;

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    console.log("login component");
  }

  login(){
    this._loginService.login(this.user)
    .then((user) => {
      this._loginService.setLoginStatus(true);
      this._router.navigate(['browse']);
    })
    .catch((err) => {
      this.errorMsg = JSON.parse(err._body).error;
    });
  }

}
