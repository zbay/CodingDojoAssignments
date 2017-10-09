import { Component } from '@angular/core';

let backgroundColors = ["red", "blue", "green", "yellow", "purple", "pink", "black", "navy", "gray", "orange", "tan", "brown", "white", "cyan", "YellowGreen", "OrangeRed", "BlueViolet"];
let randomColors = [];
for(let i = 0; i < 10; i += 1){
  randomColors.push(backgroundColors[Math.floor(Math.random() * backgroundColors.length)]);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  backgrounds: any[] = randomColors;
}
