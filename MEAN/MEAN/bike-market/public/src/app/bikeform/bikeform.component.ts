import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bikeform',
  templateUrl: './bikeform.component.html',
  styleUrls: ['./bikeform.component.css']
})
export class BikeformComponent implements OnInit {
  bike = {price: 1.0, title: "", description: "", location: "", imgURL: ""};
  errorMsg = undefined;
  @Output() refreshEmitter = new EventEmitter();

  constructor(private _bikeService: BikeService) { }

  ngOnInit() {}

  newBike(){
    this._bikeService.newBike(this.bike)
      .then((response) =>{
        this.refreshEmitter.emit();
        this.errorMsg = undefined;
      })
      .catch((err) => {
        this.errorMsg = JSON.parse(err._body).error;
        console.log(this.errorMsg);
      });
  }

}
