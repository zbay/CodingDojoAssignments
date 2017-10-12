import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote_format';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  @Output() newQuoteEmitter = new EventEmitter();
  newQuote = new Quote();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.newQuote.votes = 0;
    console.log(JSON.stringify(this.newQuote));
    this.newQuoteEmitter.emit(this.newQuote);
    this.newQuote = new Quote();
  }

}
