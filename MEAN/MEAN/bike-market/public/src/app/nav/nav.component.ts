import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() clicked: String;

  constructor(private _router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  logout(){
    this._loginService.logout()
      .then((response) => {
        this._loginService.setLoginStatus(false);
        this._router.navigate(['/']);
      })
      .catch((err) => {
        this._loginService.setLoginStatus(false);
        this._router.navigate(['/']);
      });
  }
}
