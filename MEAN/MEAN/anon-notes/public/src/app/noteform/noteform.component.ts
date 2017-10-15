import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Note } from '../note';


@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css'],
  providers: []
})
export class NoteformComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  data: Note = new Note();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitEvent.emit(this.data);
    this.data = new Note();
  }
}
