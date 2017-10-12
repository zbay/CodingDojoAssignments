import { Component } from '@angular/core';
import { Quote } from './quote_format';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [];
  addQuote(newQuote: Quote){
    console.log(JSON.stringify(newQuote));
    this.quotes.push(newQuote);
    //console.log(JSON.stringify(this.quotes));
  }
  upvoteQuote(idx){
    console.log("upvoting");
    this.quotes[idx].votes++;
  }

  downvoteQuote(idx){
    console.log("downvoting");
    this.quotes[idx].votes--;
  }

  deleteQuote(idx){
    console.log("deleting");
    this.quotes.splice(idx, 1);
  }
}
