import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather: object = {};

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void{
    this._weatherService.retrieveWeather("McLean,va")
      .subscribe((weather) => {
        this.weather = weather;
      },
        console.error);
  }
}
