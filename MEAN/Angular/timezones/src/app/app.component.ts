import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pstSelected: boolean = true;
  mstSelected: boolean = false;
  cstSelected: boolean = false;
  estSelected: boolean = false;
  clearSelected: boolean = false;
  datetime: any;

  getDate(){
    this.datetime = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    console.log(this.datetime);
  }

  change(timezone){
    this.pstSelected = false;
    this.cstSelected = false;
    this.mstSelected = false;
    this.estSelected = false;
    switch(timezone){
      case 'pst':
        this.pstSelected = true;
        this.datetime = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
        break;
      case 'est':
        this.estSelected = true;
        this.datetime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        break;
      case 'cst':
        this.datetime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
        this.cstSelected = true;
        break;
      case 'mst':
        this.datetime = new Date().toLocaleString('en-US', { timeZone: 'America/Denver' });
        this.mstSelected = true;
        break;
      case 'clear':
        this.datetime = "";
        break;
    }
  }

  ngOnInit(){
    this.getDate();
  }
}
