import { Component, OnInit, OnDestroy } from '@angular/core';
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

  /*ngOnDestroy(){
    this._loginService.loggedInObservable.unsubscribe();
  }*/

  getBikes(){
    this._bikeService.getMine().subscribe((response) => { 
      this.bikes = response.bikes; // OnDelete: call this.bikes!
    },
  (err) => {
    this.errorMsg = JSON.parse(err._body).error;
  });
  }

  refresh(blank){
    console.log("refreshing bikes");
    this.getBikes();
  }
}
