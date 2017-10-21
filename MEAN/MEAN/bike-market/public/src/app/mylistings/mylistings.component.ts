import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylistings',
  templateUrl: './mylistings.component.html',
  styleUrls: ['./mylistings.component.css']
})
export class MylistingsComponent implements OnInit {
  bikes = undefined;
  errorMsg = undefined;

  constructor(private _router: Router, private _bikeService: BikeService, private _loginService: LoginService) {
    this._loginService.loggedInObservable.subscribe((isLoggedIn) => {
      if(!isLoggedIn){
        this._router.navigate(['/']);
      }
    });
   }

  ngOnInit() {
    this.getBikes();
  }

  getBikes(){
    this._bikeService.getMine().subscribe((response) => { 
      this.bikes = response.bikes; // OnDelete: call this.bikes!
    },
  (err) => {
    this.errorMsg = JSON.parse(err._body).error;
  });
   /* .then((bikes) => {
        this.bikes = bikes.bikes;
        console.log(this.bikes);
        if(bikes.length === 0){
          this.errorMsg = "No bikes are in the database! Maybe you should add one."
        }
        else{
          this.errorMsg = undefined;
        }
    })
    .catch((err) => {
      this.errorMsg = JSON.parse(err._body).error;
      console.log(this.errorMsg);
    });*/
  }

  refresh(blank){
    console.log("refreshing bikes");
    this.getBikes();
  }
}
