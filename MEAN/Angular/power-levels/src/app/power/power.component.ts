import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerLevelTemp: number = 100
  powerLevel: number = 100;
  powerLevels: number[] = [];
  constructor() { 
  }

  ngOnInit() {
    for(let i = 1; i <= this.powerLevel; i++){
      this.powerLevels[i] = i;
    }
  }

  onSubmit(){
    this.powerLevel = this.powerLevelTemp;
  }

}
