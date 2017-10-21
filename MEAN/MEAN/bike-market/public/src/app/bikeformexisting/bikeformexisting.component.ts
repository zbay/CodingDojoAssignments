import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bikeformexisting',
  templateUrl: './bikeformexisting.component.html',
  styleUrls: ['./bikeformexisting.component.css']
})
export class BikeformexistingComponent implements OnInit {
  @Input() origBike;
  @Output() refreshEmitter = new EventEmitter();
  bike = {price: 1.0, title: "", description: "", location: "", imgURL: "", _id: ""}
  errorMsg = undefined;

  constructor(private _bikeService: BikeService) {}

  ngOnInit() {
    console.log("bikeform existing component");
    this.bike = this.origBike;
  }

  edit(){
    console.log(this.bike);
    this._bikeService.update(this.bike)
    .then((response) =>{
      this.refreshEmitter.emit();
      this.errorMsg = undefined;
    })
    .catch((err) => {
      this.errorMsg = JSON.parse(err._body).error;
      console.log(this.errorMsg);
    });  
  }

  delete(){
    this._bikeService.delete(this.bike._id)
      .then((response) =>{
        this.refreshEmitter.emit();
        this.errorMsg = undefined;
      })
      .catch((err) => {
        console.log(err);
        this.errorMsg = JSON.parse(err._body).error;
        console.log(this.errorMsg);
      });
  }

}
