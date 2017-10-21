import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  user = {firstName: "", lastName: "", email: "", password: "", passwordConfirmation: ""}
  errorMsg = undefined;

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    console.log("register component");
  }

  register(){
    this._loginService.register(this.user)
    .then((user) => {
      this._router.navigate(['browse']);
      this._loginService.setLoginStatus(true);
    })
    .catch((err) => {
      this.errorMsg = JSON.parse(err._body).error;
      console.log(this.errorMsg);
    });
  }
}
