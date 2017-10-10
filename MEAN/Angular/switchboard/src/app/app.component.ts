import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons: boolean[];
  initButtons(){
    this.buttons = [];
    for(let i = 0; i < 10; i++){
      this.buttons.push(false);
    }
  }
  toggle(idx){
    this.buttons[idx] = !this.buttons[idx];
  }
  ngOnInit(){
    this.initButtons();
  }
}
