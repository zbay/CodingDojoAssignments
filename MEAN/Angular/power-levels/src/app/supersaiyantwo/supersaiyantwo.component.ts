import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit, OnChanges {
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
    if(this.powerLevel*150 > 9000){
      this.message = "Over 9000!";
    }
    else{
      this.message = undefined
    }
  }

}
