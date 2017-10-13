import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sj',
  templateUrl: './sj.component.html',
  styleUrls: ['./sj.component.css']
})
export class SjComponent implements OnInit {
  weather: object = {};
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this.getWeather();
    }
  
    getWeather(): void{
      this._weatherService.retrieveWeather("San Jose,ca")
        .subscribe((weather) => {
          this.weather = weather;
        },
          console.error);
    }
}
