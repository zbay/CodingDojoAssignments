import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService { // rewrite with callbacks instead of promises?
  loggedInObservable = new BehaviorSubject(false);

  constructor(private _http: Http) { }

  register(data){
    return this._http.post("/api/user", data)
      .map(response => response.json())
      .toPromise();  
  }

  login(data){
    return this._http.post("/api/login", data)
    .map(response => response.json())
    .toPromise();      
  }

  logout(){
    return this._http.get("/api/logout")
    .map(response => response.json())
    .toPromise();  
  }

  setLoginStatus(bool: boolean){
    this.loggedInObservable.next(bool);
  }

}
