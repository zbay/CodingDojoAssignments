import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  backgrounds: any[] = [];

  getColors(){
    let backgroundColors = ["red", "blue", "green", "yellow", "purple", "pink", "black", "navy", "gray", "orange", "tan", "brown", "white", "cyan", "YellowGreen", "OrangeRed", "BlueViolet"];
    let randomColors = [];
    for(let i = 0; i < 10; i += 1){
      this.backgrounds.push(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);
    }
  }

  ngOnInit(){
    this.getColors();
  }
}
