import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {
  @Input() powerLevel: number;
  message = undefined;
  constructor() { }

  ngOnInit() {
    this.testMessage();
  }

  ngOnChanges(){
    this.testMessage();
  }

  testMessage(){
    if(this.powerLevel * 250 > 20000){
      this.message = "Superlative!";
    }
    else if(this.powerLevel * 250 > 9000){
      this.message = "Over 9000!"
    }
    else{
      this.message = undefined
    }
  }

}
