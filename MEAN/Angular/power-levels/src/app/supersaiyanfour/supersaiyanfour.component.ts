import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit {
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
    if(this.powerLevel * 500 === 50000){
      this.message = "The One!";
    }
    else if(this.powerLevel * 500 > 20000){
      this.message = "Superlative!"
    }
    else if(this.powerLevel * 500 > 9000){
      this.message = "Over 9000!";
    }
    else{
      this.message = undefined
    }
  }

}
