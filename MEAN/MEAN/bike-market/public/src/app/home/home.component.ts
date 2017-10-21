import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  randomBike: {};
  bikeLoaded: boolean = false;

  constructor(private _router: Router, private _bikeService: BikeService, private _loginService: LoginService) { }

  ngOnInit() {
    console.log("home component");
    this._bikeService.getRandom()
      .then((bike) => {
        this.randomBike = bike.bike;
        this.bikeLoaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}