import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chi',
  templateUrl: './chi.component.html',
  styleUrls: ['./chi.component.css']
})
export class ChiComponent implements OnInit {
  weather: object = {};
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this.getWeather();
    }
  
    getWeather(): void{
      this._weatherService.retrieveWeather("Chicago,il")
        .subscribe((weather) => {
          this.weather = weather;
        },
          console.error);
    }
}
