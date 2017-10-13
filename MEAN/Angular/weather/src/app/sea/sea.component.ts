import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sea',
  templateUrl: './sea.component.html',
  styleUrls: ['./sea.component.css']
})
export class SeaComponent implements OnInit {
  weather: object = {};
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this.getWeather();
    }
  
    getWeather(): void{
      this._weatherService.retrieveWeather("Seattle,wa")
        .subscribe((weather) => {
          this.weather = weather;
        },
          console.error);
    }

}
