import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }

  getAll(){
    return this._http.get("/api/bikes")
    .map(response => response.json());  
  }

  getMine(){
    return this._http.get("/api/myBikes")
    .map(response => response.json());  
  }

  getRandom(){
    return this._http.get("/api/randomBike")
    .map(response => response.json())
    .toPromise();  
  }

  getByTitle(){
    return this._http.get("/api/bikeSearch")
    .map(response => response.json())
    .toPromise();  
  }

  update(data){
    console.log("updating bike...");
    return this._http.post("/api/editBike", data)
    .map(response => response.json())
    .toPromise();  
  }

  delete(id){
    return this._http.post("/api/deleteBike", {bikeID: id})
    .map(response => response.json())
    .toPromise(); 
  }

  newBike(data){
    return this._http.post("/api/bike", data)
    .map(response => response.json())
    .toPromise();  
  }
}
