import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  retrieveWeather(destination: string){
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + destination + "&appid=ee5e54e290fd8250233a59e2acaeaf4b")
        .map(response => response.json());
  }
}
