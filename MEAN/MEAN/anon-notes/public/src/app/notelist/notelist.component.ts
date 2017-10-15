import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css'],
  providers: []
})
export class NotelistComponent {
  @Input() notes;
  constructor() { }
}
