import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  @Input() interactive: Boolean;
  @Input() bike;
  @Output() refreshEmitter = new EventEmitter();

  constructor(private _bikeService: BikeService) { }

  ngOnInit() {
  }

  deleteBike(){
    this._bikeService.delete(this.bike._id)
      .then(() =>{
        this.refreshEmitter.emit();
      })
      .catch();
  }

  contactAlert(){
    alert("Name: " + this.bike.firstName + "\n" + "Email: " + this.bike.email);
  }
}
