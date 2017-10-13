import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: object = {};
  
    constructor(private _weatherService: WeatherService) { }
  
    ngOnInit() {
      this.getWeather();
    }
  
    getWeather(): void{
      this._weatherService.retrieveWeather("Burbank,ca")
        .subscribe((weather) => {
          this.weather = weather;
        },
          console.error);
    }

}
