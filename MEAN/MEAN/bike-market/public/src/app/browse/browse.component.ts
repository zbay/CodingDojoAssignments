import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  bikes = undefined;
  errorMsg = undefined;
  filter = "";

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

  nothing(){}

  getBikes(){
    this._bikeService.getAll().subscribe((response) => {
      this.bikes = response.bikes;
      if(this.bikes.length === 0){
        this.errorMsg = "No bikes are in the database! Maybe you should add one."
      }
      else{
        this.errorMsg = undefined;
      }
    },
    (err) => {
      this.errorMsg = JSON.parse(err._body).error;
    });
    /*.then((bikes) => {
        console.log(bikes.bikes);
        this.bikes = bikes.bikes;
        if(bikes.length === 0){
          this.errorMsg = "No bikes are in the database! Maybe you should add one."
        }
        else{
          this.errorMsg = undefined;
        }
    })
    .catch((err) => {
      console.log(err);
      console.log(err._body);
      this.errorMsg = JSON.parse(err._body).error;
      console.log(this.errorMsg);
    });*/
  }

  refresh(blank){
    this.getBikes();
  }

  searchByTitle(){
    this._bikeService.getByTitle()
    .then((bikes) => {
      this.bikes = bikes;
      if(bikes.length === 0){
        this.errorMsg = "No bikes have this title! Maybe you should add one that does."
      }
      else{
        this.errorMsg = undefined;
      }
  })
  .catch((err) => {
    this.errorMsg = JSON.parse(err._body).error;
    console.log(this.errorMsg);
  });
  }

}
