import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dal',
  templateUrl: './dal.component.html',
  styleUrls: ['./dal.component.css']
})
export class DalComponent implements OnInit {
  weather: object = {};
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this.getWeather();
    }
  
    getWeather(): void{
      this._weatherService.retrieveWeather("Dallas,tx")
        .subscribe((weather) => {
          this.weather = weather;
        },
          console.error);
    }
}
