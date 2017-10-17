import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userbox',
  templateUrl: './userbox.component.html',
  styleUrls: ['./userbox.component.css']
})
export class UserboxComponent implements OnInit {
  @Input() user: object;
  constructor() { }

  ngOnInit() {
  }

}
